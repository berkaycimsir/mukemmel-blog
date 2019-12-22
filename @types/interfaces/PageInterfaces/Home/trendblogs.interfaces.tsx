import { Blog } from "../../../types/DatabaseTypes";

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
