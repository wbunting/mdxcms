import React from 'react';
import App, { Container } from 'next/app';
import withApollo from '../lib/withApollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import withReduxStore from '../lib/with-redux-store';
import theme from '../lib/theme';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, reduxStore } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
              <Provider store={reduxStore}>
                <Component {...pageProps} />
              </Provider>
            </ThemeProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withReduxStore(withApollo(MyApp));
