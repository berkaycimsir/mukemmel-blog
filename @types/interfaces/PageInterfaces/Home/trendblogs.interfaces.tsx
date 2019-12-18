import { Blog } from "../../../types/Blog";

export interface GetTrendBlogsReturnType {
  getTrendBlogs: [Blog];
}

export interface GetMostTrendBlogReturnType {
  blog: Blog;
  errorMessage: string;
}
