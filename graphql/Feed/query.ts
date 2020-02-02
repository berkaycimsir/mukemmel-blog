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
      blog {
        id
        title
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
      errorMessage
    }
  }
`;

export const FEEDS_FOR_ONLY_LENGTH = gql`
  query {
    feeds {
      id
    }
  }
`;
