import { Box, Flex, Button } from 'rebass';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import RawEditor from './RawEditor';
import WISYWIGEditor from './WISYWIGEditor';

const Controls = styled(Flex)({
  height: '48px',
});

const CREATE_FILE = gql`
  mutation CreateFile($mdx: String!, $fileName: String!) {
    createFile(mdx: $mdx, fileName: $fileName) {
      id
    }
  }
`;
const Editor = ({ activeFile }) => {
  const [code, setCode] = React.useState(activeFile.content);
  const [editor, setEditor] = React.useState('raw');
  const createPost = useMutation(CREATE_FILE, {
    variables: {
      mdx: code,
      name: activeFile.name,
    },
  });

  return (
    <Box>
      <Controls justifyContent="space-between" py={1} px={2}>
        <Flex>
          <Button
            width={100}
            bg={editor === 'raw' ? 'black' : 'white'}
            color={editor === 'raw' ? 'white' : 'black'}
            onClick={() => setEditor('raw')}
            border={editor === 'raw' && '1px solid black'}
          >
            <Flex alignItems="center" justifyContent="center">
              <Box px={2}>Raw</Box>
            </Flex>
          </Button>
          <Button
            width={100}
            bg={editor === 'wysiwyg' ? 'black' : 'white'}
            color={editor === 'wysiwyg' ? 'white' : 'black'}
            border={editor === 'wysiwyg' && '1px solid black'}
            onClick={() => setEditor('wysiwyg')}
          >
            <Flex alignItems="center" justifyContent="center">
              <Box px={2}>WYSIWYG</Box>
            </Flex>
          </Button>
        </Flex>
        <Flex>
          <Button
            width={100}
            bg="white"
            color="black"
            border="1px solid black"
            onClick={createPost}
          >
            <Flex alignItems="center" justifyContent="center">
              <Box px={2}>Save</Box>
            </Flex>
          </Button>
        </Flex>
      </Controls>
      {editor === 'raw' ? (
        <RawEditor code={code} handleChange={c => setCode(c)} />
      ) : (
        <WISYWIGEditor />
      )}
    </Box>
  );
};

export default Editor;
