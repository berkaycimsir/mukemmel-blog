import { gql } from "apollo-boost";

export const ADD_BLOG = gql`
  mutation(
    $owner_id: ID!
    $title: String!
    $content: String!
    $summary: String!
    $tags: [String!]!
    $img: String!
    $category: String!
  ) {
    createBlog(
      data: {
        owner_id: $owner_id
        title: $title
        content: $content
        summary: $summary
        tags: $tags
        img: $img
        category: $category
      }
    ) {
      blog {
        owner_id
        title
      }
      errorMessage
    }
  }
`;

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
