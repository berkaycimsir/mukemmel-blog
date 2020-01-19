import { gql } from "apollo-boost";

export const LIKE_FEED = gql`
  mutation($id: ID!, $isUnliking: Boolean!) {
    likeFeed(id: $id, isUnliking: $isUnliking)
  }
`;

export const REPLY_FEED = gql`
  mutation($reply_id: String!, $user_id: ID!, $content: String!) {
    addFeed(
      data: { reply_id: $reply_id, user_id: $user_id, content: $content }
    ) {
      feed {
        id
      }
      errorMessage
    }
  }
`;

export const ADD_FEED = gql`
  mutation($blog_id: String, $user_id: ID!, $content: String!) {
    addFeed(data: { blog_id: $blog_id, user_id: $user_id, content: $content }) {
      feed {
        id
      }
      errorMessage
    }
  }
`;
