import React from './node_modules/react'
import * as Rebass from './node_modules/@rebass/emotion'
import { Box, Flex } from './node_modules/rebass';
import dynamic from './node_modules/next/dynamic'

import { serializer, stringifyMDX } from './node_modules/@blocks/editor/src'
const Editor = dynamic(() => import('./node_modules/@blocks/editor/src/components/Editor'), {
  ssr: false,
});

// These are probably gonna change later
const __DEVELOPER_SAVE = value => {
  const result = stringifyMDX(serializer.serialize(value))
  window.localStorage['lastMDX'] = result
}

const initialValue =
  typeof window !== 'undefined'
    ? window.localStorage['lastMDX']
    : '# Blocks\n\nBlocks turns your MDX into WYSIWYG\n supports all **md formattings**\n\n## And even YouTube:\n\n<YouTube videoId="d2sQiI5NFAM" />'

const Sidebar = () => (
  <Box width={250}>
    Hi
  </Box>
)

export default () => (<Editor
  initialValue={initialValue || `# Hello World!`}
  onChange={({ title, value, emoji }) => {
    __DEVELOPER_SAVE(value)
  }}
  components={{
    ...Rebass
  }}
/>)

