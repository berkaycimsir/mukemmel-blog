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
      id
      name
      surname
      username
      gender
      createdAt
    }
  }
`;

export const USER = gql`
  query($id: ID!) {
    user(id: $id) {
      user {
        id
        name
        surname
        username
        email
        gender
        admin
        createdAt
        blogs {
          title
        }
        comments {
          content
        }
        feeds {
          id
          blog_id
          user_id
          content
          likes
          createdAt
          user {
            name
            surname
            username
            gender
          }
          replies {
            id
            blog_id
            user_id
            content
            likes
            createdAt
            user {
              name
              surname
              username
              gender
            }
            replies {
              id
            }
          }
          blog {
            id
            title
          }
        }
      }
      errorMessage
    }
  }
`;
