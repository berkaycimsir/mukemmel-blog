import { gql } from "apollo-boost";

export const GET_COMMENT_BY_USER_ID = gql`
  query($user_id: ID!, $blog_id: ID!) {
    getCommentByUserId(user_id: $user_id, blog_id: $blog_id) {
      comment {
        id
        blog_id
        content
        likes
        createdAt
        user {
          id
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
