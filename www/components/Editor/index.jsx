import { Box, Flex, Button } from 'rebass';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import RawEditor from './RawEditor';
import WISYWIGEditor from './WISYWIGEditor';

const Controls = styled(Flex)({
  height: '48px',
});

const UPDATE_FILE = gql`
  mutation UpdateFile($fileId: ID!, $content: String!) {
    updateFile(fileId: $fileId, content: $content) {
      id
    }
  }
`;
const Editor = ({ activeFile }) => {
  const [code, setCode] = React.useState(activeFile.content);
  const [editor, setEditor] = React.useState('raw');
  React.useEffect(() => {
    setCode(activeFile.content);
  }, [activeFile]);

  const createPost = useMutation(UPDATE_FILE, {
    variables: {
      fileId: activeFile.id,
      content: code,
    },
  });

  const EditorComponent = editor === 'raw' ? RawEditor : WISYWIGEditor;

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
      <EditorComponent code={code} handleChange={c => setCode(c)} />
    </Box>
  );
};

export default Editor;
