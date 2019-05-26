const { prisma } = require('../../generated/prisma-client');
const { parse } = require('url');

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);
  const { id } = query;
  const file = await prisma.file({ id });
  res.end(JSON.stringify(file));
};
