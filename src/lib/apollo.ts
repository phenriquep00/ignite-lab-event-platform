import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q0ikal2of401xs2i3c75mp/master',
    cache: new InMemoryCache()
})