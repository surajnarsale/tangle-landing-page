import { getConfig } from '@/config/index'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: getConfig().graphqlBaseUrl,
  cache: new InMemoryCache(),
})
