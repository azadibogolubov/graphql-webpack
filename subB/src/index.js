import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache()
});

const mount = (el) => {
  ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_sub-b-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
