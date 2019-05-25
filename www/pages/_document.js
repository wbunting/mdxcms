import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}