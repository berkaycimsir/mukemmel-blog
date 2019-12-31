import { Blog } from "../../../types/database/DatabaseTypes";

export interface GetBlogsReturnType {
  blogs: [Blog];
}

export interface GetLastFourBlogReturnType {
  getLastFourBlog: [Blog];
}
