const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String,
    firstName: String,
    lastName: String
  }

  type SpringReviews {
    _id: ID
  }

  type springMedia {
    _id: ID
    imageURL: String!
    Caption: String!
  }

  type Spring {
    _id: ID
    springName: String
    latitude: Float
    longitude: Float
    springState: String
    springCounty: String
    springDescription: String
    address: String
    admission: String
    springMedia: [springMedia]


  }
  
  type Query {
    users: [User]
    spring(springID: ID!): Spring
    singleUser(userID: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth}
`;

module.exports = typeDefs;
