import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "https://graphqlpokemon.favware.tech/",
  cache: new InMemoryCache(),
});
