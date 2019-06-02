import React from 'react';
import RebassMDX from '@rebass/mdx';
import { withAmp } from 'next/amp';
import MDX from '@mdx-js/runtime';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import Container from '../components/Container';

import withMDXCMS from 'mdxcms/lib/integrations/next';
import MDXComponents from '../components/MDXComponents';
import checkLoggedIn from '../lib/checkLoggedIn';

const Docs = ({ mdx, me }) => {
  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} loggedIn={me} />
      </Header>
      <Page title="Next.js - The React Framework">
        <Container>
          <RebassMDX>
            <MDX components={MDXComponents}>{mdx}</MDX>
          </RebassMDX>
        </Container>
      </Page>
    </>
  );
};

Docs.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  return { ...loggedInUser };
};

export default withMDXCMS({
  owner: 'wbunting',
  repo: 'mdxcms-content',
})(withAmp(Docs, { hybrid: true }));
