const { prisma } = require('../../generated/prisma-client');

const fetch = require('isomorphic-unfetch');
const { parse } = require('url');
const { hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ZEIT_API = 'https://api.zeit.co';

const getZeitUser = async (access_token, res) => {
  try {
    const userResponse = await fetch(`${ZEIT_API}/www/user`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const { user } = await userResponse.json();
    if (!user) {
      throw new Error('failed to get user from Zeit');
    }
    return user;
  } catch (e) {
    console.log(e);
    res.end(e);
  }
};

const encodeParams = jsonParams =>
  Object.keys(jsonParams)
    .map(key => {
      return (
        encodeURIComponent(key) + '=' + encodeURIComponent(jsonParams[key])
      );
    })
    .join('&');

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);
  const { code } = query;

  const baseUri =
    process.env.NOW_REGION === 'dev1'
      ? 'http://localhost:3000'
      : 'https://mdxcms.com';

  const params = {
    client_id: process.env.NOW_INTEGRATION_ID,
    client_secret: process.env.NOW_INTEGRATION_SECRET,
    code,
    redirect_uri: `${baseUri}/oauth`,
  };

  const response = await fetch(`${ZEIT_API}/v2/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodeParams(params),
  });
  const data = await response.json();
  const { access_token } = data;
  const zeitUser = await getZeitUser(access_token, res);
  const { email } = zeitUser;

  console.log('zeit user email', email);

  // see if user exists
  const userWithThisEmail = await prisma.user({
    email,
  });

  console.log('our user with that email', userWithThisEmail);
  if (userWithThisEmail) {
    res.end(
      JSON.stringify({
        token: jwt.sign(
          { userId: userWithThisEmail.id },
          process.env.JWT_SECRET
        ),
        user: userWithThisEmail,
      })
    );
  } else {
    // if user does not exist then create one
    // since we are using oauth the password is irrelevant
    const hashedPassword = await hash(email, 10);

    const user = await prisma.createUser({
      email,
      password: hashedPassword,
      zeitLinked: true,
      zeitToken: access_token,
    });

    const defaultProjectName = 'my-first-mdxcms';

    // spin up a ziet project with the files
    const projectResponse = await fetch(
      `${ZEIT_API}/v1/projects/ensure-project`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: defaultProjectName }),
      }
    );
    const projectData = await projectResponse.json();

    const defaultRepo = await prisma.createContentRepository({
      zeitProjectName: projectData.name,
      zeitProjectId: projectData.id,
      author: {
        connect: {
          id: user.id,
        },
      },
    });

    const initialFile = {
      file: 'hello-world.mdx',
      data: '# Welcome to MDXMCS!',
    };

    const deploymentResponse = await fetch(`${ZEIT_API}/v9/now/deployments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: defaultProjectName,
        version: 2,
        files: [initialFile],
      }),
    });

    await prisma.createFile({
      name: initialFile.file,
      content: initialFile.data,
      author: {
        connect: {
          id: user.id,
        },
      },
      repository: {
        connect: {
          id: defaultRepo.id,
        },
      },
    });

    res.end(
      JSON.stringify({
        token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
        user,
      })
    );
  }
};
