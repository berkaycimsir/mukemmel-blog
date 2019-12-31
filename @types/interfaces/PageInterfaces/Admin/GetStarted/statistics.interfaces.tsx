import { Blog } from "../../../../types/database/DatabaseTypes";

export interface GetBlogsReturnData {
  blogs: Array<Blog>;
}

export interface GetAllCommentsReturnData {
  comments: Array<Comment>;
}
