const fetch = require('isomorphic-unfetch');
const { verify } = require('jsonwebtoken');
const { parse } = require('url');

export const ZEIT_API = 'https://api.zeit.co';

export const getZeitUser = async (access_token, res) => {
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

export const getUserId = req => {
  const Authorization = req.getHeader('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, process.env.JWT_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
};

export const getUserIdRest = req => {
  const { query } = parse(req.url, true);
  const { token } = query;
  const verifiedToken = verify(token, process.env.JWT_SECRET);
  if (verifiedToken) {
    return verifiedToken.userId;
  } else {
    throw new Error('was not able to authenticate');
  }
};
