import React from 'react';
import RebassMDX from '@rebass/mdx';
import { withAmp } from 'next/amp';
import MDX from '@mdx-js/runtime';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import Container from '../components/Container';

import withMDXCMS from 'mdxcms/lib/integrations/next';

const Home = ({ mdx }) => {
  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page>
        <Container>
          <RebassMDX>
            <MDX>{mdx}</MDX>
          </RebassMDX>
        </Container>
      </Page>
    </>
  );
};

export default withMDXCMS({
  apiToken: process.env.MDXCMS_SECRET,
  repositoryName: 'mdxcms',
  pathname: '/index',
})(withAmp(Home, { hybrid: true }));
