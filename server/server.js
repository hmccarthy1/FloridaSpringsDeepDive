const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {springSeed} = require('./seed')
const session = require('express-session');
const routes = require('./controllers');
const User = require('./models/User');
const mongoose = require('./config/connection');
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require('./schemas');
var express = require('express')
const dotenv = require('dotenv').config({path: '../.env'});

var app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const PORT = process.env.PORT || 3001;



// Inform Express.js on which template engine to use
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  mongoose.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();


