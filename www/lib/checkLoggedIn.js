import gql from 'graphql-tag';

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query {
          me {
            id
            apiToken
            repositories {
              id
              name
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
    .catch(error => {
      // Fail gracefully
      console.log(error);
      return { loggedInUser: {} };
    });
