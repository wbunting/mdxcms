import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Select from 'react-select';

import File from '../../Icons/File';
import FilePlus from '../../Icons/FilePlus';

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
      justifyContent="space-between"
      alignItems="center"
    >
      <Box px={2}>
        <Title>Files</Title>
      </Box>
      <Flex alignItems="center">
        <NewFile repositoryId={repository.id} />
      </Flex>
    </Flex>
  );
};

const FileLineContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const FileLine = ({
  fileName,
  depth,
  active,
  fileId,
  setActiveFile,
  activeFileUnsavedChanges,
}) => {
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
          <Text fontSize={1}>{`${fileName}${
            activeFileUnsavedChanges ? '*' : ''
          }`}</Text>
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
  height: calc(100vh - 48px);
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  overflow: auto;
  border: 1px solid black;
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

const Files = ({
  repository,
  activeFile,
  setActiveFile,
  activeFileUnsavedChanges,
}) => (
  <>
    <Control repository={repository} />
    {repository.files.map(f => (
      <FileLine
        fileName={f.name}
        setActiveFile={setActiveFile}
        fileId={f.id}
        depth={0}
        active={f.id === activeFile}
        activeFileUnsavedChanges={activeFileUnsavedChanges}
      />
    ))}
  </>
);

const SelectContainer = styled.div`
  width: 232px;
  height: 52px;
`;

const RepositoryPicker = ({ repositories, repository, setActiveRepo }) => {
  const selectedProject = repositories[repository];

  const projects = repositories.map(r => ({
    ...r,
    label: r.name,
    value: r.name,
  }));

  return (
    <Box px={2} py={2}>
      <SelectContainer>
        <Select
          options={projects}
          value={selectedProject}
          onChange={p => {
            repositories.find(r => r === p);
          }}
        />
      </SelectContainer>
    </Box>
  );
};

const Sidebar = ({
  repository,
  repositories,
  setActiveRepo,
  activeFile,
  setActiveFile,
  activeFileUnsavedChanges,
}) => (
  <Container>
    <Item>
      <RepositoryPicker
        repositories={repositories}
        repository={repository}
        setActiveRepo={setActiveRepo}
      />
    </Item>
    <Item>
      <Files
        repository={repository}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        activeFileUnsavedChanges={activeFileUnsavedChanges}
      />
    </Item>
  </Container>
);

export default Sidebar;
