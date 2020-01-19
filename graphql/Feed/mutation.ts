import { gql } from "apollo-boost";

export const LIKE_FEED = gql`
  mutation($id: ID!, $isUnliking: Boolean!) {
    likeFeed(id: $id, isUnliking: $isUnliking)
  }
`;
