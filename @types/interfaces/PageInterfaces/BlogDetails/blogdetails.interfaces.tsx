import { Blog, User } from "../../../types/Blog";

interface IReturnData {
  blog: Blog;
  user: User;
  comments: [Comment];
  errorMessage: string;
}

export interface GetBlogByIdReturnType {
  blog: IReturnData;
}
