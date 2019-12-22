import { gql } from "apollo-boost";

export const GET_COMMENT_BY_USER_ID = gql`
  query($user_id: ID!) {
    getCommentByUserId(user_id: $user_id) {
      comment {
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
