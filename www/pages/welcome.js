import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import Select from 'react-select';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const Container = styled.div`
  min-height: 100vh;
`;

const SelectContainer = styled.div`
  width: 500px;
`;

const NEW_REPO = gql`
  mutation CreateRepo($projectId: ID!, $name: String!) {
    createRepo(projectId: $projectId, name: $name) {
      id
    }
  }
`;

const Welcome = ({ projects }) => {
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  const createRepo = useMutation(NEW_REPO, {
    variables: {
      name: selectedProject.name,
      projectId: selectedProject.id,
    },
  });

  const addContentToProject = async () => {
    await createRepo();
    redirect({}, '/editor');
  };

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} loggedIn />
      </Header>
      <Page>
        <Container>
          <Box my={6}>
            <Flex flexDirection="column" alignItems="center">
              <Box my={2}>
                <Text fontSize={5}>Welcome to MDXCMS!</Text>
              </Box>
              <Box my={1}>
                <Text fontSize={2}>
                  To get started select one of your existing Zeit projects
                </Text>
              </Box>
              <SelectContainer>
                <Select
                  options={projects}
                  value={selectedProject}
                  onChange={setSelectedProject}
                />
              </SelectContainer>
              <Box my={2}>
                <Button
                  width={250}
                  bg="black"
                  color="white"
                  onClick={() => addContentToProject()}
                >
                  <Flex justifyContent="center" alignItems="center">
                    <Box px={2}>Add Content to Project</Box>
                  </Flex>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Page>
    </>
  );
};

function parseCookies(req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options
  );
}

Welcome.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser || !loggedInUser.me) {
    // Already signed in? No need to continue.
    // Throw them back to the main page
    redirect(context, '/login');
  }
  const { me } = loggedInUser;

  const { token } = parseCookies(context.req);
  const projectsResp = await fetch(
    `${process.env.HOST}/api/zeit/projects?token=${token}`
  );
  const projects = await projectsResp.text();
  return {
    ...me,
    projects: JSON.parse(projects).map(p => ({
      ...p,
      value: p.name,
      label: p.name,
    })),
  };
};

export default Welcome;
