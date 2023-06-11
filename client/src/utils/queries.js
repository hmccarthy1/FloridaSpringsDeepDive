import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }`;
  
  export const SINGLE_SPRING = gql`
  query getSingleSpring($springID: ID!) {
    spring(springID:  $springID) {
    
      _id
      springName
      springDescription
      springMedia {
        imageURL
        Caption
      }
    }
  }`
  
  export const allUsers = gql` 
  
  query users {
    users {
        email
        username
        password
        firstName
        lastName
    }
  }
  
  `
