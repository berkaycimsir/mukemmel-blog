import { gql } from "apollo-boost";

export const REGISTER: any = gql`
  mutation(
    $name: String!
    $surname: String!
    $username: String!
    $email: String!
    $password: String!
    $gender: String!
  ) {
    register(
      data: {
        name: $name
        surname: $surname
        username: $username
        email: $email
        password: $password
        gender: $gender
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

export const UPDATE: any = gql`
  mutation(
    $id: ID!
    $name: String
    $surname: String
    $username: String
    $email: String
    $gender: String
  ) {
    update(
      data: {
        id: $id
        name: $name
        surname: $surname
        username: $username
        email: $email
        gender: $gender
      }
    )
  }
`;

export const SEND_MAIL = gql`
  mutation(
    $name: String!
    $email: String!
    $subject: String
    $message: String
  ) {
    sendMail(
      data: { name: $name, email: $email, subject: $subject, message: $message }
    )
  }
`;
