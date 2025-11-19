import { ApolloClient, createHttpLink, InMemoryCache,  } from "@apollo/client";

const httpLink = createHttpLink({
  // FIXME: Replace this with your actual GraphQL endpoint.
  uri: "YOUR_GRAPHQL_ENDPOINT", 
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
