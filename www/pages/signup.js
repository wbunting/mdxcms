import React from 'react'
import { withAmp } from 'next/amp';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';
import Container from '../components/Container';

import {Button, Flex, Box} from 'rebass';
import GitHubLogo from '../components/Icons/Github';
import Email from '../components/Icons/Email';

const Signup = () => {
  return (
    <>
      <Header height={48} shadow={false}>
        <Navbar hideLogo={false} />
      </Header>
      <Page>
        <Box my={7}>
          <Flex flexDirection="column" alignItems="center">
            <Box py={1}><h1>Login to MDXCMS</h1></Box>
            <Box py={1}>
              <Button bg="black" color="white">
                <Flex alignItems="center">
                  <GitHubLogo invert />
                  <Box px={2}>Sign up with Github</Box>
                </Flex>
              </Button>
            </Box>
            <Box py={1}>
              <Button bg="white" color="black" border="1px solid black">
                <Flex alignItems="center">
                  <Email />
                  <Box px={2}>Sign up with Email</Box>
                </Flex>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Page>
    </>
  )
};

export default withAmp(Signup, { hybrid: true });