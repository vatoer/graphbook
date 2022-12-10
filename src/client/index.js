import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import App from './App';
import client from './apollo'

ReactDom.render(
    <ApolloProvider client={client}>
    <App/>
    </ApolloProvider>, document.getElementById('root'));