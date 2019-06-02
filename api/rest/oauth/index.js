const { prisma } = require('../../generated/prisma-client');

const fetch = require('isomorphic-unfetch');
const { parse } = require('url');
const { hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { ZEIT_API, getZeitUser } = require('../../lib/util');

const encodeParams = jsonParams =>
  Object.keys(jsonParams)
    .map(key => {
      return (
        encodeURIComponent(key) + '=' + encodeURIComponent(jsonParams[key])
      );
    })
    .join('&');

const getZeitToken = async code => {
  const baseUri = 'http://localhost:3000';
  // process.env.NOW_REGION === 'dev1'
  //   ? 'http://localhost:3000'
  //   : 'https://mdxcms.com';

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
  return access_token;
};

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);
  const { code } = query;

  const zeitToken = await getZeitToken(code);
  const zeitUser = await getZeitUser(zeitToken, res);
  const { email } = zeitUser;

  // see if user exists
  const userWithThisEmail = await prisma.user({
    email,
  });

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
      apiToken: hashedPassword,
      zeitToken,
    });

    res.end(
      JSON.stringify({
        token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
        user,
      })
    );
  }
};
