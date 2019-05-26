const { prisma } = require('../../generated/prisma-client')

module.exports = async (req, res) => {
  const users = await prisma.users({})
  res.end(JSON.stringify(users))
}
