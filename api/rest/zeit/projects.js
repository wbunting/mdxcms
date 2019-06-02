const { prisma } = require('../../generated/prisma-client');
const fetch = require('isomorphic-unfetch');
const { ZEIT_API, getUserIdRest } = require('../../lib/util');
const { verify } = require('jsonwebtoken');
const { parse } = require('url');

module.exports = async (req, res) => {
  // get the zeit token
  const userId = getUserIdRest(req);
  const user = await prisma.user({ id: userId });
  const { zeitToken } = user;
  const projectsResponse = await fetch(`${ZEIT_API}/v1/projects/list`, {
    headers: {
      Authorization: `Bearer ${zeitToken}`,
    },
  });
  const projects = await projectsResponse.json();
  res.end(JSON.stringify(projects));
};
