import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/home';
import Sidebar from './components/Sidebar';
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({ uri: '/graphql', cache: new InMemoryCache() })

function App() {
  return (


    // Apollo wrapper

    <ApolloProvider client={client}>

      {/* // Router */}

      <Router>
        <div className="App column">

          {/* Universal elements */}
          <Header />
          <div className='row'>

          <div style={{height: '93vh', backgroundColor: '#111'}} className='col-1'>
            <Sidebar />
            </div>
          <div className='col-11'>
            <Routes>
              <Route
                path='/signup'
                element={<Signup />} />
              <Route
                path='/'
                element={<Home></Home>} />
            </Routes>
            </div>
          </div>


        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
