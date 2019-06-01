import React from 'react';
import githubPages from '../backends/githubPages';
import mdxcms from '../backends/mdxcms';
import useCMSReload from '../react/useCMSReload';

const getFetcher = backend => {
  switch (backend) {
    case 'github':
      return githubPages;
    case 'mdxcms':
      return mdxcms;
    default:
      throw new Error(`unrecognized backend: ${backend}`);
  }
};

const withMDXCMS = backend => meta => Component => {
  const _Component = ({ pageProps, mdx, etag }) => {
    useCMSReload(etag);

    return <Component {...pageProps} mdx={mdx} />;
  };

  _Component.getInitialProps = async ctx => {
    let pageProps = {};
    const { res, pathname } = ctx;

    const dataFetcher = getFetcher(backend);

    const mdx = await dataFetcher({
      ...meta,
      pathname,
    });

    const etag = require('crypto')
      .createHash('md5')
      .update(mdx)
      .digest('hex');

    if (res) {
      res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
      res.setHeader('X-version', etag);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, mdx, etag };
  };

  return _Component;
};

export default withMDXCMS;
