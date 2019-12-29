import { gql } from "apollo-boost";

export const DELETE_BLOG = gql`
  mutation($id: ID!) {
    deleteBlog(id: $id) {
      blog {
        id
      }
      errorMessage
    }
  }
`;
