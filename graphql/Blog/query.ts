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

export const GET_MOST_TREND_BLOG = gql`
  query {
    getMostTrendBlog {
      blog {
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
      errorMessage
    }
  }
`;

export const GET_TREND_BLOGS = gql`
  query {
    getTrendBlogs {
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

export const GET_BLOG_BY_ID = gql`
  query($id: ID!) {
    blog(id: $id) {
      blog {
        id
        owner_id
        title
        content
        tags
        likes
        views
        img
        createdAt
        user {
          name
          surname
          username
        }
        comments {
          title
          content
        }
      }
      errorMessage
    }
  }
`;
