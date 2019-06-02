import React from 'react';
import Link from 'next/link';
import { withAmp } from 'next/amp';
// import styled from 'styled-components';
// import gql from 'graphql-tag';
import redirect from '../lib/redirect';
// import cookie from 'cookie';
// import { Mutation, withApollo } from 'react-apollo';
import { Button, Flex, Box } from 'rebass';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Page from '../components/Page';

import ZeitLogo from '../components/Icons/Zeit';
// import Email from '../components/Icons/Email';
// import Lock from '../components/Icons/Lock';

import checkLoggedIn from '../lib/checkLoggedIn';

// const Input = styled.input`
//   font-size: 16px;
//   border: none;
//   padding: 4px;
//   outline: none;
// `;

// const ErrorRebassBox = styled(Box)({
//   borderRadius: '4px',
// });

// const ErrorBox = ({ error }) => {
//   if (
//     error.graphQLErrors &&
//     error.graphQLErrors[0].message.includes('No user found')
//   ) {
//     return (
//       <ErrorRebassBox bg="red" px={2} py={2} color="white">
//         We were not able to find a user with that email address.
//       </ErrorRebassBox>
//     );
//   }
//   return (
//     <ErrorRebassBox bg="red" px={2} py={2} color="white">
//       An unexpected error occured. Please contact support.
//     </ErrorRebassBox>
//   );
// };

// const LOGIN = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         id
//       }
//     }
//   }
// `;

// const LoginBox = withApollo(({ client }) => {
//   const [email, setEmail] = React.useState(null);
//   const [password, setPassword] = React.useState(null);

//   return (
//     <Mutation
//       mutation={LOGIN}
//       onCompleted={data => {
//         // Store the token in cookie
//         document.cookie = cookie.serialize('token', data.login.token, {
//           maxAge: 30 * 24 * 60 * 60, // 30 days
//         });
//         // Force a reload of all the current queries now that the user is
//         // logged in
//         client.cache.reset().then(() => {
//           redirect({}, '/editor');
//         });
//       }}
//       onError={error => {
//         // If you want to send error to external service?
//         console.log(error);
//       }}
//     >
//       {(signIn, { data, error }) => (
//         <form
//           onSubmit={e => {
//             e.preventDefault();
//             e.stopPropagation();

//             signIn({
//               variables: {
//                 email,
//                 password,
//               },
//             });

//             setEmail('');
//             setPassword('');
//           }}
//         >
//           <Flex
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Box py={1}>
//               <Box
//                 width={250}
//                 bg="white"
//                 color="black"
//                 py={2}
//                 css={{
//                   border: '1px solid black',
//                   borderRadius: '4px',
//                 }}
//               >
//                 <Flex alignItems="center" justifyContent="center">
//                   <Email />
//                   <Box px={2}>
//                     <Input
//                       type="text"
//                       onChange={e => setEmail(e.target.value)}
//                       value={email}
//                       placeholder="you@domain.com"
//                     />
//                   </Box>
//                 </Flex>
//               </Box>
//             </Box>
//             <Box
//               width={250}
//               bg="white"
//               color="black"
//               py={2}
//               css={{
//                 border: '1px solid black',
//                 borderRadius: '4px',
//               }}
//             >
//               <Flex alignItems="center" justifyContent="center">
//                 <Lock />
//                 <Box px={2}>
//                   <Input
//                     type="password"
//                     onChange={e => setPassword(e.target.value)}
//                     value={password}
//                     placeholder="Password"
//                   />
//                 </Box>
//               </Flex>
//             </Box>
//             <Box py={1}>
//               <Button width={250} bg="black" color="white">
//                 <Flex alignItems="center" justifyContent="center">
//                   <Box px={2}>Login</Box>
//                 </Flex>
//               </Button>
//             </Box>
//             {error && <ErrorBox error={error} />}
//           </Flex>
//         </form>
//       )}
//     </Mutation>
//   );
// });

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
