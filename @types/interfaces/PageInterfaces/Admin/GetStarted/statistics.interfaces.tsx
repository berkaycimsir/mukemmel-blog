import { Blog } from "../../../../types/DatabaseTypes";

export interface GetBlogsReturnData {
  blogs: Array<Blog>;
}

export interface GetAllCommentsReturnData {
  comments: Array<Comment>;
}
