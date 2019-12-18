import { Blog } from "../../../types/Blog";

export interface GetTrendBlogsReturnType {
  getTrendBlogs: [Blog];
}

interface IReturnData {
  blog: Blog;
  errorMessage: string;
}

export interface GetMostTrendBlogReturnType {
  getMostTrendBlog: IReturnData;
}
