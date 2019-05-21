# hast-util-to-parse5

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Chat][chat-badge]][chat]

Transform [HAST][] to [Parse5’s AST][ast].

Why not use an adapter?  Because it’s more code weight to use adapters,
and much more fragile.

## Installation

[npm][]:

```bash
npm install hast-util-to-parse5
```

## Usage

```javascript
var toParse5 = require('hast-util-to-parse5')

var ast = toParse5({
  type: 'element',
  tagName: 'h1',
  properties: {},
  children: [{type: 'text', value: 'World!'}]
})

console.log(ast)
```

Yields:

```js
{ nodeName: 'h1',
  tagName: 'h1',
  attrs: [],
  namespaceURI: 'http://www.w3.org/1999/xhtml',
  childNodes: [ { nodeName: '#text', value: 'World!', parentNode: [Circular] } ] }
```

## API

### `toParse5(tree[, space])`

Transform a [HAST Node][node] to an `ASTNode` according to the default
Parse5 adapter.

###### `space`

Whether the root of the given tree is in the `'html'` or `'svg'` space (enum,
`'svg'` or `'html'`, default: `'html'`).

If an `svg` element is found in the HTML space, `toParse5` automatically
switches to the SVG space when entering the element, and switches back when
leaving.

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-to-parse5.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-to-parse5

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-to-parse5.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-to-parse5

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-to-parse5.svg

[downloads]: https://www.npmjs.com/package/hast-util-to-parse5

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[hast]: https://github.com/syntax-tree/hast

[ast]: https://github.com/inikulin/parse5/wiki/Documentation

[node]: https://github.com/syntax-tree/hast#ast

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
