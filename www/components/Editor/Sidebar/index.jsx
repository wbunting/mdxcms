import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Select from 'react-select';
import { HotKeys } from 'react-hotkeys';
import { withRouter } from 'next/router';

import File from '../../Icons/File';
import FilePlus from '../../Icons/FilePlus';

const NEW_FILE = gql`
  mutation createFile($content: String!, $name: String!, $repositoryId: ID!) {
    createFile(content: $content, name: $name, repositoryId: $repositoryId) {
      id
    }
  }
`;

const RENAME_FILE = gql`
  mutation renameFile($fileId: ID!, $newName: String!) {
    renameFile(fileId: $fileId, newName: $newName) {
      name
    }
  }
`;

const NewFile = ({ repositoryId, setCreatingNewFile }) => {
  return (
    <Button variant="icon" onClick={() => setCreatingNewFile(true)} px={2}>
      <FilePlus color="white" />
    </Button>
  );
};

const Control = ({ repository, setCreatingNewFile }) => {
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
        <NewFile
          repositoryId={repository.id}
          setCreatingNewFile={setCreatingNewFile}
        />
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
  file,
  fileName,
  depth,
  active,
  fileId,
  setActiveFile,
  activeFileUnsavedChanges,
}) => {
  const [rename, setRename] = React.useState(false);
  const [name, setName] = React.useState(fileName);

  const renameFile = useMutation(RENAME_FILE, {
    variables: {
      fileId,
      newName: name,
    },
  });

  const handleRenameFile = async () => {
    const file = await renameFile();
    setRename(false);
  };

  const handlers = {
    RENAME_FILE: handleRenameFile,
  };

  const keyMap = {
    RENAME_FILE: 'return',
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <FileLineContainer>
        <Flex
          bg={active ? 'black' : 'white'}
          color={active ? 'white' : 'black'}
          px={2}
          py={1}
          justifyContent="flex-start"
          alignItems="center"
          onClick={() => setActiveFile(file)}
          onDoubleClick={() => setRename(true)}
        >
          <Box px={2}>
            <File color={active ? 'white' : 'black'} />
          </Box>
          <Box px={depth} />
          {!rename ? (
            <Box>
              <Text fontSize={1}>{`${name}${
                activeFileUnsavedChanges && active ? '*' : ''
              }`}</Text>
            </Box>
          ) : (
            <Box>
              <input value={name} onChange={e => setName(e.target.value)} />
            </Box>
          )}
        </Flex>
      </FileLineContainer>
    </HotKeys>
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
  border-right: 1px solid #efefef;
`;

const Item = styled.div`
  border-bottom: 1px solid #efefef;
  ${({ hover, theme }) =>
    hover && `&:hover { background-color: ${theme.background.darken(0.3)()};}`};
`;

const Title = styled.span`
  font-size: 16px;
  color: black;
`;

const NewFileInput = ({ repositoryId, setActiveFile }) => {
  const [name, setName] = React.useState('.mdx');

  const newFile = useMutation(NEW_FILE, {
    variables: {
      name,
      content: '',
      repositoryId,
    },
  });

  const createNewFile = async () => {
    const file = await newFile();
    setActiveFile(file);
  };

  const handlers = {
    NEW_FILE: createNewFile,
  };

  const keyMap = {
    NEW_FILE: 'return',
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <FileLineContainer>
        <Flex
          bg="white"
          color="black"
          px={2}
          py={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box px={2}>
            <File color="black" />
          </Box>
          <Box>
            <input value={name} onChange={e => setName(e.target.value)} />
          </Box>
        </Flex>
      </FileLineContainer>
    </HotKeys>
  );
};

const Files = ({
  repository,
  activeFile,
  setActiveFile,
  activeFileUnsavedChanges,
}) => {
  const [creatingNewFile, setCreatingNewFile] = React.useState(false);

  return (
    <>
      <Control
        repository={repository}
        setCreatingNewFile={setCreatingNewFile}
      />
      {repository.files.map(f => (
        <FileLine
          file={f}
          fileName={f.name}
          setActiveFile={setActiveFile}
          fileId={f.id}
          depth={0}
          active={f.id === activeFile}
          activeFileUnsavedChanges={activeFileUnsavedChanges}
        />
      ))}
      {creatingNewFile && (
        <NewFileInput
          repositoryId={repository.id}
          setActiveFile={setActiveFile}
        />
      )}
    </>
  );
};

const SelectContainer = styled.div`
  width: 232px;
  height: 52px;
`;

const RepositoryPicker = ({ repositories, repository, setActiveRepo }) => {
  const projects = repositories.map(r => ({
    ...r,
    label: r.name,
    value: r.name,
  }));

  const selectedRepository = projects.find(p => p.name === repository.name);

  return (
    <Box px={2} py={2}>
      <SelectContainer>
        <Select
          options={projects}
          value={selectedRepository}
          onChange={p => {
            window.location = `https://mdxcms.com/editor?project=${p.name}`;
          }}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: 'black',
            },
          })}
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
