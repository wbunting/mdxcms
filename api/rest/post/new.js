const { prisma } = require('../../generated/prisma-client')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.post('*', async (req, res) => {
  const newPost = await prisma.createPost(req.body)
  res.json(newPost)
})

module.exports = app;