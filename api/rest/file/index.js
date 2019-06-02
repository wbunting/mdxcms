const { prisma } = require('../../generated/prisma-client');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('*', async (req, res) => {
  // make sure we are authenticated
  const { apiToken, pathname, repositoryName } = req.body;
  const user = await prisma.user({ apiToken });

  if (!user) {
    throw new Error(`No user found with this token`);
  }

  const matchingRepositores = await prisma.contentRepositories({
    where: {
      name: repositoryName,
      author: {
        id: user.id,
      },
    },
  });

  if (!matchingRepositores[0]) {
    throw new Error(`No repository found with that name`);
  }

  const fileName = `${pathname.split('/').slice(-1)[0]}.mdx`;

  const matchingFiles = await prisma.files({
    where: {
      name: fileName,
      repository: {
        id: matchingRepositores[0].id,
      },
    },
  });

  res.end(JSON.stringify(matchingFiles[0]));
});

module.exports = app;
