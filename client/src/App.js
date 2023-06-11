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
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import IndividualSpring from './pages/individualSpring';
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

      <Router basename=''>
        <div className="App column" style={{width: '100vw', maxWidth: '100vw'}}>

          {/* Universal elements */}

          <div style={{position: 'fixed', left: 0, top: 0, width: '100vw'}} className=''><Header className='col-12 pl-3'/></div>
          
          <div className='row'>

          <div style={{height: '93vh', backgroundColor: '#111', position: 'fixed', top: '7vh', left: '0'}} className='col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2 col-2'>
            <Sidebar />
          </div>

          <div className='col-xl-11 col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 bodyContent p-5 justify-content-center' style={{left: '10vw', top: '7vh', position: 'fixed', overflow: 'scroll', height: '95%'}}>
            <Routes>
              <Route
                path='/signup'
                element={<Signup />} />
            <Route
            path='/spring/:springId'
            
            element={<IndividualSpring></IndividualSpring>}
            
            />
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
