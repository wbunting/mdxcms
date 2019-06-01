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

  const searchParams = Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');

  const response = await fetch(`${ZEIT_API}/v2/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: searchParams,
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

    const defaultRepo = await prisma.createContentRepository({
      author: {
        connect: {
          id: user.id,
        },
      },
    });

    await prisma.createFile({
      name: 'hello-world.mdx',
      content: '# Welcome to MDXMCS!',
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
