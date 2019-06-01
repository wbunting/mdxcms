import gql from 'graphql-tag';

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query {
          me {
            id
            repositories {
              id
              files {
                id
                content
                name
              }
            }
          }
        }
      `,
    })
    .then(({ data }) => {
      return { loggedInUser: data };
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} };
    });
