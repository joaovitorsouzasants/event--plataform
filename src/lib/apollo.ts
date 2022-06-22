import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oq1avj0ms901xn5nimdaam/master', 
    cache: new InMemoryCache()
})