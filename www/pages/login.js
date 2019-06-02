import React from 'react';
import Link from 'next/link';
import { withAmp } from 'next/amp';
import { Button, Flex, Box } from 'rebass';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import ZeitLogo from '../components/Icons/Zeit';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';

const Login = () => {
  const redirectToZeit = () => {
    const url = `https://zeit.co/oauth/authorize?client_id=oac_Z0iR2lPBkdPRNpFr7Q6gERIi`;

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
              <h1>Login to MDXCMS</h1>
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
                  <Box px={2}>Sign in with Zeit</Box>
                </Flex>
              </Button>
            </Box>
            <Box py={1}>
              <Link href="/signup">
                <a>Don't have an account? Sign Up</a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Page>
    </>
  );
};

// if you are already logged in then redirect to editor
Login.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  console.log(loggedInUser);

  if (loggedInUser.me) {
    // Already signed in? No need to continue.
    // Throw them back to the main page
    redirect(context, '/editor');
  }

  return {};
};

export default withAmp(Login, { hybrid: true });
