import React from 'react'
import RebassMDX from '@rebass/mdx'
import { useAmp, withAmp } from 'next/amp';
import MDX from '@mdx-js/runtime';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import Container from '../components/Container';

import useCMSReload from 'mdxcms/lib/react/useCMSReload';
import withMDXCMS from 'mdxcms/lib/integrations/next';
import MDXComponents from '../components/MDXComponents';

const Docs = ({ mdx, etag }) => {
  const isAmp = useAmp();
  useCMSReload(etag);

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page title="Next.js - The React Framework">
        <Container>
          <RebassMDX>
            <MDX components={MDXComponents}>{mdx}</MDX>
          </RebassMDX>
        </Container>
      </Page>
    </>
  )
};

export default withMDXCMS('github')({
  owner: 'wbunting',
  repo: 'mdxcms-content'
})(withAmp(Docs, { hybrid: true }));