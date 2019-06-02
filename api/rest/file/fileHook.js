const { prisma } = require('../../generated/prisma-client');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('*', async (req, res) => {
  // make sure we are authenticated
  const { pathname, projectId } = req.body;

  const zeitProject = await prisma.zeitProject({ projectId });
  if (!zeitProject) {
    // create a zeit project for this project
  }

  // find the repository
  const repository = await prisma.contentRepositories({
    where: {
      zeitProject: {
        id: zeitProject.id,
      },
    },
  });
  // its unique
  const [project] = repository;

  // get all the files in the repo
  const files = await prisma.files({
    where: {
      repository: {
        id: project.id,
      },
    },
  });

  res.end(JSON.stringify({ files, project }));
});

module.exports = app;
