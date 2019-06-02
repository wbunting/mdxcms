import { Box, Flex, Button } from 'rebass';
import styled from 'styled-components';

import RawEditor from './RawEditor';
import WISYWIGEditor from './WISYWIGEditor';

const Controls = styled(Flex)({
  height: '48px',
});

const Editor = ({ activeFile, code, setCode, save }) => {
  const [editor, setEditor] = React.useState('raw');
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
            onClick={save}
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
