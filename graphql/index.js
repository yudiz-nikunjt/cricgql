import React from 'react'
import PropTypes from 'prop-types'
import { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import toast from 'react-hot-toast';
import { API_URL } from '../constants';

const httpLink = createHttpLink({
  uri: API_URL
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : "",
    },
  });
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      if (extensions?.code === 'UNAUTHENTICATED') {
        localStorage.clear()
        sessionStorage.clear()
      }
      toast.error(message)
    })
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const graphqlClient = new ApolloClient({
  link: from([authMiddleware, errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

function MyApolloProvider(props) {
    return <ApolloProvider client={graphqlClient}>{props.children}</ApolloProvider>
}
MyApolloProvider.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  logout: PropTypes.func
}
export default MyApolloProvider
