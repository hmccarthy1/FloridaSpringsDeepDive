import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query singleUser($userID: ID!) {
    singleUser(userID: $userID) {
      _id
      username
      email
      firstName
      lastName
      
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
