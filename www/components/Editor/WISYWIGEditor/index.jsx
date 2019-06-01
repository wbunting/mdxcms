import React from 'react';
import * as Rebass from '@rebass/emotion';
import { Box, Flex } from 'rebass';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { serializer, stringifyMDX } from '@blocks/editor/src';
const Editor = dynamic(() => import('@blocks/editor/src/components/Editor'), {
  ssr: false,
});

// These are probably gonna change later
const __DEVELOPER_SAVE = value => {
  const result = stringifyMDX(serializer.serialize(value));
  window.localStorage['lastMDX'] = result;
};

const initialValue =
  typeof window !== 'undefined'
    ? window.localStorage['lastMDX']
    : '# Blocks\n\nBlocks turns your MDX into WYSIWYG\n supports all **md formattings**\n\n## And even YouTube:\n\n<YouTube videoId="d2sQiI5NFAM" />';

const EditorBox = styled(Flex)({
  width: 'calc(100vw - 250px)',
  height: 'calc(100vh - 96px)',
  overflowY: 'hidden',
});

export default ({ code, handleChange }) => (
  <EditorBox>
    <Editor
      initialValue={code}
      onChange={({ title, value, emoji }) => {
        handleChange(stringifyMDX(serializer.serialize(value)));
      }}
      components={{
        ...Rebass,
      }}
    />
  </EditorBox>
);
