import React from 'react';
import { Flex } from 'rebass';
import { HotKeys } from 'react-hotkeys';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import Editor from '../components/Editor';
import Sidebar from '../components/Editor/Sidebar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const UPDATE_FILE = gql`
  mutation UpdateFile(
    $fileId: ID!
    $content: String!
    $repositoryName: String!
  ) {
    updateFile(
      fileId: $fileId
      content: $content
      repositoryName: $repositoryName
    ) {
      id
      content
    }
  }
`;

const keyMap = {
  SAVE: 'command+s',
};

const EditorPage = ({ repositories, apiToken }) => {
  const [activeRepo, setActiveRepo] = React.useState(0);
  const [activeFile, setActiveFile] = React.useState(
    repositories[activeRepo].files[0]
  );
  const [code, setCode] = React.useState(
    repositories[activeRepo].files[0].content
  );
  const createPost = useMutation(UPDATE_FILE, {
    variables: {
      fileId: activeFile.id,
      repositoryName: repositories[activeRepo].name,
      content: code,
    },
  });

  const save = async event => {
    event.preventDefault();
    try {
      const res = await createPost();
      setActiveFile({ ...activeFile, content: res.data.updateFile.content });
    } catch (e) {
      console.log(e);
    }
  };

  const handlers = {
    SAVE: save,
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} loggedIn />
      </Header>
      <Page>
        <Flex>
          <Sidebar
            repository={repositories[activeRepo]}
            files={repositories[activeRepo].files}
            activeFile={activeFile.id}
            setActiveFile={setActiveFile}
            activeFileUnsavedChanges={activeFile.content !== code}
          />
          <Editor
            activeFile={activeFile}
            code={code}
            setCode={setCode}
            save={save}
          />
        </Flex>
      </Page>
    </HotKeys>
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
  if (!me) {
    throw new Error('failed to redirect correctly');
  }
  if (me.repositories.length === 0) {
    redirect(context, '/welcome');
  }
  return { ...me };
};

export default EditorPage;
