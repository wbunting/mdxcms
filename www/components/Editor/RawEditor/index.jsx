import React from './node_modules/react';
import Carbon from './Carbon';
import { MetaLinks } from './Meta'
import {
  LANGUAGES,
  LANGUAGE_MIME_HASH,
  LANGUAGE_MODE_HASH,
  LANGUAGE_NAME_HASH,
  DEFAULT_EXPORT_SIZE,
  COLORS,
  EXPORT_SIZES_HASH,
  DEFAULT_CODE,
  DEFAULT_SETTINGS,
  DEFAULT_LANGUAGE,
  DEFAULT_PRESET_ID,
  DEFAULT_THEME,
  FONTS
} from '../../../lib/constants'

const RawEditor = () => {
  const carbonNode = React.useRef(null);
  const [language, setLanguage] = React.useState('markdown');
  const [code, setCode] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <div>
      <MetaLinks />
      <Carbon
        key="markdown"
        ref={carbonNode}
        config={{ ...DEFAULT_SETTINGS, preset: DEFAULT_PRESET_ID, language}}
        onChange={c => setCode(c)}
        loading={loading}
        theme={DEFAULT_THEME}
      >
        {code !== null ? code : DEFAULT_CODE}
      </Carbon>
    </div>
  )
}

export default RawEditor;