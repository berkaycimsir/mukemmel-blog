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

export const UPDATE_BLOG = gql`
  mutation(
    $blog_id: ID!
    $title: String
    $content: String
    $summary: String
    $tags: [String!]
    $img: String
    $category: String
  ) {
    createBlog(
      data: {
        blog_id: $blog_id
        title: $title
        content: $content
        summary: $summary
        tags: $tags
        img: $img
        category: $category
      }
    ) {
      blog {
        summary
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
