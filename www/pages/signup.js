import React from 'react';
import Link from 'next/link';
import { withAmp } from 'next/amp';
import styled from 'styled-components';
import { Button, Flex, Box } from 'rebass';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import ZeitLogo from '../components/Icons/Zeit';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const Input = styled.input`
  font-size: 16px;
  border: none;
  padding: 4px;
  outline: none;
`;

const Signup = () => {
  const redirectToZeit = () => {
    const url = `https://zeit.co/oauth/authorize?client_id=${
      process.env.NOW_INTEGRATION_ID
    }`;

    window.location.href = url;
  };

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page>
        <Box my={6}>
          <Flex flexDirection="column" alignItems="center">
            <Box py={1}>
              <h1>Sign Up for MDXCMS</h1>
            </Box>
            <Box py={1}>
              <p>A dead-simple way to manage your site's `.mdx` content</p>
            </Box>
            <Box py={1}>
              <Button
                width={250}
                bg="black"
                color="white"
                onClick={() => redirectToZeit()}
              >
                <Flex justifyContent="center" alignItems="center">
                  <ZeitLogo invert />
                  <Box px={2}>Sign up with Zeit</Box>
                </Flex>
              </Button>
            </Box>
            <Box py={1}>
              <Link href="/login">
                <a>Already have an account? Sign in with Zeit</a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Page>
    </>
  );
};

// if you are already logged in then redirect to editor
Signup.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (loggedInUser.user) {
    // Already signed in? No need to continue.
    // Throw them back to the main page
    redirect(context, '/editor');
  }

  return {};
};

export default withAmp(Signup, { hybrid: true });
