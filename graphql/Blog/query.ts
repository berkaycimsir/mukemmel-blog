import { gql } from "apollo-boost";

export const GET_BLOGS = gql`
  query {
    blogs {
      id
      owner_id
      title
      content
      tags
      likes
      views
      img
      createdAt
    }
  }
`;

export const GET_LAST_FOUR_BLOG = gql`
  query {
    getLastFourBlog {
      id
      owner_id
      title
      content
      tags
      likes
      views
      img
      createdAt
    }
  }
`;
