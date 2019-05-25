const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('*', (req, res) => {
  const mdx = `
  # Hello, world!
  
  <Demo />
  `

  res.json({mdx})
})

module.exports = app;