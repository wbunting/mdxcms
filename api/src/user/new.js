const { prisma } = require('../../generated/prisma-client')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.post('*', async (req, res) => {
  const newUser = await prisma.createUser(req.body)
  res.json(newUser)
})

module.exports = app;