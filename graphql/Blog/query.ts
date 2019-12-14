import { gql } from "apollo-boost";

export const GET_BLOGS = gql`
  query {
    query {
      blogs {
        id
        owner_id
        title
        content
        tags
        likes
        createdAt
      }
    }
  }
`;
