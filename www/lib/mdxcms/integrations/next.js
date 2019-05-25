import React from 'react';
import githubPages from '../backends/githubPages';

const getFetcher = backend => {
  switch (backend) {
    case 'github':
      return githubPages;
    default:
      throw new Error('unrecognized backend');
  }
}

const withMDXCMS = backend => (meta) => (Component) => {
  const _Component = ({ pageProps, mdx, etag }) => {
    return (
      <Component {...pageProps} mdx={mdx} etag={etag} />
    );
  }

  _Component.getInitialProps = async ({ res, pathname }) => {
    let pageProps = {};

    const dataFetcher = getFetcher(backend);

    const mdx = await dataFetcher({
      ...meta,
      pathname
    })

    const etag = require("crypto")
      .createHash("md5")
      .update(mdx)
      .digest("hex");

    if (res) {
      res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
      res.setHeader("X-version", etag);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, mdx, etag };
  }

  return _Component;
}

export default withMDXCMS;