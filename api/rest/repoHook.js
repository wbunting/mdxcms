const { prisma } = require('../generated/prisma-client');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('*', async (req, res) => {
  // make sure we are authenticated
  const { projectId, email, name } = req.body;

  const zeitProject = await prisma.zeitProject({ projectId });
  console.log(zeitProject, 'zeitProject');
  if (!zeitProject) {
    // create a zeit project for this project
    const user = await prisma.user({ email });
    const repo = await prisma.createContentRepository({
      author: {
        connect: {
          id: user.id,
        },
      },
      name,
    });
    await prisma.createZeitProject({
      name,
      projectId,
      repository: {
        connect: { id: repo.id },
      },
    });
    await prisma.createFile({
      name: 'hello-world.mdx',
      content: '# Welcome to MDXMCS!',
      author: {
        connect: {
          id: user.id,
        },
      },
      repository: {
        connect: {
          id: repo.id,
        },
      },
    });
    res.end(JSON.stringify(repo));
  } else {
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
    res.end(JSON.stringify(project));
  }
});

module.exports = app;
