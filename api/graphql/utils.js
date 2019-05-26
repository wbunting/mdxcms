const { verify } = require('jsonwebtoken');

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, process.env.JWT_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}

module.exports = {
  getUserId,
};
