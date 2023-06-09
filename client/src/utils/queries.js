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
      address
      admission
      springCounty
      springMedia {
        imageURL
        Caption
      }
      amenities {
        _id
        amenityType
        amenityDescription
        Cost
        amenityWebsite
        amenityMedia {
          imageURL
          Caption
        }
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
  export const singleSpringAmenities = gql`
  
  query singleSpringAmenities($springId: ID!) {
    spring(springID: $springId) {
      amenities {
        amenityType 
      }
    }
  }
  
  `
  export const allSprings = gql`
  query AllSprings {
    allSprings {
      _id
      address
      admission
      amenities {
        Cost
        _id
        amenityDescription
        amenityMedia {
          Caption
          _id
          imageURL
        }
        amenityType
        amenityWebsite
      }
      springCounty
      springDescription
      springMedia {
        imageURL
        _id
        Caption
      }
      springName
      springState
    }
  }`
  export const FilteredSprings = gql`query FilteredSprings($amenitiesList: [String], $springNameSearch: String) {
    filteredSprings(amenitiesList: $amenitiesList, springNameSearch: $springNameSearch) {
      _id
      address
      admission
      springCounty
      springDescription
      springMedia {
        _id
        imageURL
        Caption
      }
      springName
      springState
      amenities {
        _id
        amenityType
        amenityDescription
        Cost
        amenityWebsite
        amenityMedia {
          _id
          imageURL
          Caption
        }
      }
    }
  }`
  export const singleUser = gql`query 
  singleUser($userID: ID!) {
    singleUser(userID: $userID) {
  firstName
  lastName
  
  email
  favoriteSprings {
    _id
    springName
    springDescription
    address
    admission
    springCounty
    springMedia {
      imageURL
      Caption
    }
    amenities {
      _id
      amenityType
      amenityDescription
      Cost
      amenityWebsite
      amenityMedia {
        imageURL
        Caption
      }
    }}

  }
  
  }`
  export const getRating = gql`query Query($springLookup: ID!, $userLookup: ID!) {
    getRating(springLookup: $springLookup, userLookup: $userLookup) {
      _id
      rating
      springLookup
      userLookup
    }
  }`