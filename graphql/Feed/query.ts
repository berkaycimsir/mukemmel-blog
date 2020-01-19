import { gql } from "apollo-boost";

export const FEEDS = gql`
  query {
    feeds {
      id
      blog_id
      user_id
      reply_id
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
  }
`;

export const FEED = gql`
  query($id: ID!) {
    feed(id: $id) {
      feed {
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
      }
      errorMessage
    }
  }
`;