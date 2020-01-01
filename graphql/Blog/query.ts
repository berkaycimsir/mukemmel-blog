import { gql } from "apollo-boost";

export const GET_BLOGS = gql`
  query {
    blogs {
      id
      owner_id
      title
      content
      summary
      tags
      likes
      views
      img
      createdAt
      category
      user {
        name
        surname
        username
        gender
      }
    }
  }
`;

export const GET_LAST_FOUR_BLOG = gql`
  query {
    getLastFourBlog {
      id
      owner_id
      title
      views
      img
      user {
        username
      }
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
        user {
          username
        }
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
      summary
      tags
      likes
      views
      img
      createdAt
      user {
        username
      }
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
        summary
        content
        tags
        views
        img
        createdAt
        user {
          name
          surname
          username
        }
        comments {
          id
          blog_id
          user_id
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
      }
      errorMessage
    }
  }
`;

export const GET_BLOGS_BY_CATEGORY = gql`
  query($category: String!) {
    getBlogByCategory(category: $category) {
      id
      owner_id
      title
      content
      summary
      tags
      likes
      createdAt
      img
      views
      user {
        name
        surname
        username
        gender
      }
    }
  }
`;
