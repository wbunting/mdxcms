import React from 'react';
import { Flex } from 'rebass';

import Editor from '../components/Editor';
import Sidebar from '../components/Editor/Sidebar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const EditorPage = ({ repositories }) => {
  const [activeFile, setActiveFile] = React.useState(
    repositories[0].files[0].id
  );

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} loggedIn />
      </Header>
      <Page>
        <Flex>
          <Sidebar
            repository={repositories[0]}
            files={repositories[0].files}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
          <Editor
            activeFile={repositories[0].files.find(f => f.id === activeFile)}
          />
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
