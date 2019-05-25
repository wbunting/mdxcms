import {Box, Flex, Button} from 'rebass';
import RawEditor from './RawEditor';
import WISYWIGEditor from './WISYWIGEditor';

const Editor = () => {
  const [value, setValue] = React.useState('# Hello World');
  const [editor, setEditor] = React.useState('raw');

  const renderEditor = () => {
    if (editor === 'raw') {
      return <RawEditor />
    }
    return (
      <WISYWIGEditor />
    )
  }

  return (
    <Box>
      <Flex>
        <Button onClick={() => setEditor('raw')}>Raw</Button>
        <Button onClick={() => setEditor('wisywig')}>WISYWIG</Button>
      </Flex>
      {renderEditor()}
    </Box>
  )
}

export default Editor;