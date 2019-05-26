import React from 'react';
import { Box, Flex } from 'rebass';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import Editor from '../components/Editor';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const FileLine = ({ fileName, depth, active }) => {
  return (
    <Flex
      bg={active ? 'black' : 'white'}
      color={active ? 'white' : 'black'}
      px={2}
    >
      <Box px={depth} />
      <Box>{fileName}</Box>
    </Flex>
  );
};

const Sidebar = ({ files, activeFile }) => {
  console.log(files);

  return (
    <Box width={250}>
      {files.map(f => (
        <FileLine fileName={f.name} depth={0} active />
      ))}
    </Box>
  );
};

const EditorPage = ({ repositories }) => {
  const [activeFile, setActiveFile] = React.useState(repositories[0].files[0]);

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page>
        <Flex>
          <Sidebar
            files={repositories[0].files}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
          <Editor activeFile={activeFile} />
        </Flex>
      </Page>
    </>
  );
};

// if you are already logged in then redirect to editor
EditorPage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser || !loggedInUser.me) {
    // Already signed in? No need to continue.
    // Throw them back to the main page
    redirect(context, '/login');
  }
  const { me } = loggedInUser;
  return { ...me };
};

export default EditorPage;
