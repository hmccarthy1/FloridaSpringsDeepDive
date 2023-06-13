import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
        username
        firstName
        lastName
      }
    }
  }
`;

export const adjustFavorite = gql`mutation AdjustFavorites($userId: ID!, $springId: ID!) {
  adjustFavorites(userID: $userId, springID: $springId) {
    _id
    address
    admission
    amenities {
      amenityDescription
      amenityMedia {
        Caption
        imageURL
        _id
      }
      _id
      Cost
      amenityType
      amenityWebsite
    }
    springCounty
    springDescription
    springMedia {
      Caption
      _id
      imageURL
    }
    springName
    springState
  }
}`