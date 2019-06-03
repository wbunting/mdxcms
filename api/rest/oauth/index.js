const { prisma } = require('../../generated/prisma-client');

const fetch = require('isomorphic-unfetch');
const { parse } = require('url');
const { hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

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
  const params = {
    client_id: process.env.NOW_INTEGRATION_ID,
    client_secret: process.env.NOW_INTEGRATION_SECRET,
    code,
    redirect_uri: `${process.env.HOST}/api/oauth`,
  };

  const res = await fetch(`${ZEIT_API}/v2/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodeParams(params),
  });
  const data = await res.json();

  if (!res.ok) {
    const err = new Error(
      body.error_description || 'Failed to fetch accessToken'
    );
    err.res = res;
    err.body = body;
    throw err;
  }

  return data.access_token;
};

module.exports = async (req, res) => {
  const {
    query: { code, next },
  } = parse(req.url, true);

  if (!code) {
    res.statusCode = 400;
    res.end('missing query parameter: code');
    return;
  }

  const zeitToken = await getZeitToken(code);

  const zeitUser = await getZeitUser(zeitToken, res);
  const { email } = zeitUser;

  // see if user exists
  const userWithThisEmail = await prisma.user({
    email,
  });

  const hashedPassword = await hash(email, 10);

  let newUser;
  if (!userWithThisEmail) {
    // if user does not exist then create one
    // since we are using oauth the password is irrelevant
    newUser = await prisma.createUser({
      email,
      apiToken: hashedPassword,
      zeitToken,
    });
  }

  const userId = userWithThisEmail ? userWithThisEmail.id : newUser.id;

  const setCookie = cookie.serialize(
    'token',
    jwt.sign(
      { userId, zeitToken, apiToken: hashedPassword },
      process.env.JWT_SECRET
    ),
    {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      secure: req.connection.encrypted,
    }
  );
  res.setHeader('Set-Cookie', setCookie);

  res.statusCode = 302;
  res.setHeader('Location', next || `${process.env.HOST}/editor`);
  res.end();
};
