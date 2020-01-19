import { gql } from "apollo-boost";

export const FEEDS = gql`
  query {
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
    }
  }
`;
