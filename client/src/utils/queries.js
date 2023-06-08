import { gql } from "@apollo/client";


export const allUsers = gql`

query  users {
    users {
        _id
        username
        email
        password
    }
}

`