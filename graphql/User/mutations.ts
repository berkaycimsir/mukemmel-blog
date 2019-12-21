import { gql } from "apollo-boost";

export const REGISTER: any = gql`
  mutation(
    $name: String!
    $surname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      data: {
        name: $name
        surname: $surname
        username: $username
        email: $email
        password: $password
      }
    ) {
      token {
        token
      }
      errorMessage
    }
  }
`;

export const LOGIN: any = gql`
  mutation($username: String!, $password: String!) {
    login(data: { username: $username, password: $password }) {
      token {
        token
      }
      errorMessage
    }
  }
`;
