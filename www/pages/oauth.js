import React from 'react';
import { withRouter } from 'next/router';
import cookie from 'cookie';

import { Box, Flex } from 'rebass';

import redirect from '../lib/redirect';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

const OAuth = ({
  router: {
    query: { code },
  },
}) => {
  React.useEffect(() => {
    const getAccessToken = async () => {
      const res = await fetch(`/api/oauth?code=${code}`);
      const oauthUser = await res.text();
      const { token } = JSON.parse(oauthUser);
      // Store the token in cookie
      document.cookie = cookie.serialize('token', token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
      redirect({}, '/editor');
    };
    getAccessToken();
  }, [code]);

  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page>
        <Box my={6}>
          <Flex flexDirection="column" alignItems="center">
            <Box py={1}>
              <h1>Authenticating...</h1>
            </Box>
          </Flex>
        </Box>
      </Page>
    </>
  );
};

export default withRouter(OAuth);
