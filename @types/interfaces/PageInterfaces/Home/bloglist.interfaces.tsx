import { Blog } from "../../../types/DatabaseTypes";

export interface GetBlogsReturnType {
  blogs: [Blog];
}

export interface GetLastFourBlogReturnType {
  getLastFourBlog: [Blog];
}
