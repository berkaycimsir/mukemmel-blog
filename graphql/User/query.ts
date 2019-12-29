import { gql } from "apollo-boost";

export const GET_ACTIVE_USER = gql`
  query {
    activeUser {
      user {
        id
        name
        surname
        username
        email
        createdAt
        admin
      }
      errorMessage
    }
  }
`;

export const GET_LAST_USERS = gql`
  query {
    users {
      name
      surname
      username
      gender
      createdAt
    }
  }
`;
