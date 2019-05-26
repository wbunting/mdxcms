import React from 'react';
import Carbon from './Carbon';
import { MetaLinks } from './Meta';
import { Flex } from 'rebass';
import {
  DEFAULT_CODE,
  DEFAULT_SETTINGS,
  DEFAULT_PRESET_ID,
  DEFAULT_THEME,
} from '../../../lib/constants';
import styled from 'styled-components';

const EditorBox = styled(Flex)({
  width: 'calc(100vw - 250px)',
  height: 'calc(100vh - 96px)',
});

const RawEditor = ({ code, handleChange }) => {
  const carbonNode = React.useRef(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <MetaLinks />
      <EditorBox
        bg="#151718"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Carbon
          key="markdown"
          ref={carbonNode}
          config={{
            ...DEFAULT_SETTINGS,
            preset: DEFAULT_PRESET_ID,
            language: 'markdown',
          }}
          onChange={handleChange}
          loading={loading}
          theme={DEFAULT_THEME}
        >
          {code !== null ? code : DEFAULT_CODE}
        </Carbon>
      </EditorBox>
    </>
  );
};

export default RawEditor;
