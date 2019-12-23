import { gql } from "apollo-boost";

export const ADD_COMMENT = gql`
  mutation($blog_id: ID!, $user_id: ID!, $content: String!) {
    createComment(
      data: { blog_id: $blog_id, user_id: $user_id, content: $content }
    ) {
      comment {
        content
      }
      errorMessage
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation($id: ID!) {
    deleteComment(id: $id) {
      comment {
        id
      }
      errorMessage
    }
  }
`;
