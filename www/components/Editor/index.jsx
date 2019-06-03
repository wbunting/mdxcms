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
      <Controls justifyContent="space-between" alignItems="center" px={2}>
        <Flex>
          <Box px={2}>
            <Button
              width={100}
              onClick={() => setEditor('raw')}
              variant={editor === 'raw' ? 'primary' : 'secondary'}
              px={1}
              py={1}
            >
              <Flex alignItems="center" justifyContent="center">
                <Box px={2}>Raw</Box>
              </Flex>
            </Button>
          </Box>
          <Box>
            <Button
              width={100}
              onClick={() => setEditor('wysiwyg')}
              variant={editor === 'wysiwyg' ? 'primary' : 'secondary'}
              px={1}
              py={1}
            >
              <Flex alignItems="center" justifyContent="center">
                <Box px={2}>WYSIWYG</Box>
              </Flex>
            </Button>
          </Box>
        </Flex>
        {editor === 'wysiwyg' && (
          <Box bg="red" color="white" px={1} py={1}>
            Experimental!
          </Box>
        )}
        <Flex>
          <Button width={100} onClick={save} variant="primary" px={1} py={1}>
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
