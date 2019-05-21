const { prisma } = require('../../generated/prisma-client')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('/:postId', async (req, res) => {
  const { postId } = req.params
  const post = await prisma.post({ id: postId })
  res.json(post)
})

module.exports = app