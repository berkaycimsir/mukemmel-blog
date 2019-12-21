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
      }
      errorMessage
    }
  }
`;
