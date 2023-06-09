const mongoose = require('mongoose');

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String,
    firstName: String,
    lastName: String
    favoriteSprings: [Spring]
  }

  type SpringReviews {
    _id: ID
  }

  type springMedia {
    _id: ID
    imageURL: String!
    Caption: String!
  }

  type amenityMedia {
    _id: ID
    imageURL: String!
    Caption: String!
  }

  type amenityTypeChoices {
    _id: ID
    amenityType: String
    amenityIconURL: String
  }

  type Amenity { 
    _id: ID
    amenityType: String!
    amenityDescription: String
    Cost: String
    amenityWebsite: String
    amenityMedia: [amenityMedia]

  }

  type springRating {
    _id: ID
    springLookup: ID
    userLookup: ID
    rating: Int
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
    amenities: [Amenity]


  }

  input AmenityInput {
    amenityType: [String]!
  }
  
  type Query {
    users: [User]
    singleUser(userID: ID!): User
    spring(springID: ID!): Spring
    amenity(amenityID: ID!): Amenity
    allSprings: [Spring]
    filteredSprings(amenitiesList: [String], springNameSearch: String): [Spring]
    getRating(springLookup: ID!, userLookup: ID!): springRating
  }



  type Auth {
    token: ID!
    user: User
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    adjustFavorites(userID: ID!, springID: ID!): Spring
    adjustSpringRating(springLookup: ID!, userLookup: ID!, rating: Int!): springRating
  }
    `;

module.exports = typeDefs;
