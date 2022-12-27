import { ApolloClient, InMemoryCache } from '@apollo/client'
import { API_URL } from '../../constants'

const client = new ApolloClient({
  ssrMode: true,
  uri: API_URL,
  cache: new InMemoryCache()
})

export default async function queryGraphql(query, variables = {}, token, fetchPolicy) {
  return client.query({
    query,
    variables,
    // fetchPolicy: fetchPolicy || 'cache-first',
    fetchPolicy: 'no-cache',
    context: { headers: { Authorization: token || '' } }
  })
}
