import React from 'react';
import mdxcms from '../backends/mdxcms';
import useCMSReload from '../react/useCMSReload';

const withMDXCMS = meta => Component => {
  const _Component = ({ pageProps, mdx, etag }) => {
    useCMSReload(etag);

    return <Component {...pageProps} mdx={mdx} />;
  };

  _Component.getInitialProps = async ctx => {
    let pageProps = {};
    const { res, pathname } = ctx;

    const mdx = await mdxcms({
      pathname,
      ...meta,
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
