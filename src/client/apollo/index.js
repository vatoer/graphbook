import { gql } from "@apollo/client";
import { ApolloClient, InmMemoryCache, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const client = new ApolloClient({
    link: from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(`
                    [GraphQL error]: Message: ${message},
                    Location: 
                    ${locations}, Path: ${path}`));
                if (networkError) {
                    console.log(`[Network error]: ${networkError}`);
                }
            }
        }),
        new HttpLink({
            uri: 'http://127.0.0.1:8000/graphql'
        })
    ]),
    cache: new InMemoryCache(),
});

client.query({
    query: gql `
    {
        posts {
            id
            text
            user {
                avatar
                username
            }
        }
    }
    `
}).then( result => console.log(result));

export default client;