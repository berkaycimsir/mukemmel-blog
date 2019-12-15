import { Blog } from "../../../types/Blog";

export interface GetBlogsReturnType {
  blogs: [Blog];
}

export interface GetLastFourBlogReturnType {
  getLastFourBlog: [Blog];
}
