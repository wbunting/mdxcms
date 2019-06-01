import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import File from '../../Icons/File';
import FilePlus from '../../Icons/FilePlus';
import Folder from '../../Icons/Folder';
import FolderPlus from '../../Icons/FolderPlus';

const NEW_FILE = gql`
  mutation createFile($content: String!, $name: String!, $repositoryId: ID!) {
    createFile(content: $content, name: $name, repositoryId: $repositoryId) {
      id
    }
  }
`;

const NewFile = ({ repositoryId }) => {
  const newFile = useMutation(NEW_FILE, {
    variables: {
      name: '.mdx',
      content: '',
      repositoryId,
    },
  });

  return (
    <Button variant="primary" onClick={newFile} px={2}>
      <FilePlus color="white" />
    </Button>
  );
};

const Control = ({ repository, handleNewFile, handleNewFolder }) => {
  return (
    <Flex
      bg="white"
      color="black"
      px={2}
      py={1}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box px={2}>{repository.name}</Box>
      <NewFile repositoryId={repository.id} />
      <Box px={2}>
        <FolderPlus onClick={handleNewFolder} color="white" />
      </Box>
    </Flex>
  );
};

const FileLineContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const FileLine = ({ fileName, depth, active, fileId, setActiveFile }) => {
  return (
    <FileLineContainer>
      <Flex
        bg={active ? 'black' : 'white'}
        color={active ? 'white' : 'black'}
        px={2}
        py={1}
        justifyContent="flex-start"
        alignItems="center"
        onClick={() => setActiveFile(fileId)}
      >
        <Box px={2}>
          <File color={active ? 'white' : 'black'} />
        </Box>
        <Box px={depth} />
        <Box>
          <Text fontSize={1}>{fileName}</Text>
        </Box>
      </Flex>
    </FileLineContainer>
  );
};

const Container = styled.div`
  flex: 250px;
  width: 250px;
  /* There is a bug with ios that causes the sidebar to be longer than the preview, when you then
   * scroll the preview it scrolls the editor down (page is longer). If I set this to 100% scrolling
   * is broken in Chrome though. That's why we have this check */
  height: 100vh;
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  overflow: auto;
`;

const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  ${({ hover, theme }) =>
    hover && `&:hover { background-color: ${theme.background.darken(0.3)()};}`};
`;

const Title = styled.span`
  font-size: 16px;
  color: black;
`;

const Files = ({ repository, activeFile, setActiveFile }) => (
  <>
    <Control repository={repository} />
    {repository.files.map(f => (
      <FileLine
        fileName={f.name}
        setActiveFile={setActiveFile}
        fileId={f.id}
        depth={0}
        active={f.id === activeFile}
      />
    ))}
  </>
);

const Sidebar = ({ repository, activeFile, setActiveFile }) => (
  <Container>
    <Item>
      <Title>Files</Title>
    </Item>
    <Item>
      <Files
        repository={repository}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
      />
    </Item>
    <Item>
      <Title>Dependencies</Title>
    </Item>
    <Item />
  </Container>
);

export default Sidebar;
