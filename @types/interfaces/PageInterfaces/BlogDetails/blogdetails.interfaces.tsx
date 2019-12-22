import { Blog, User, Comment } from "../../../types/Blog";

export type Props = {
  session: any;
};

interface IReturnData {
  blog: Blog;
  user: User;
  comments: Array<Comment>;
  errorMessage: string;
}

export interface GetBlogByIdVariables {
  id: string;
}

export interface GetBlogByIdReturnType {
  blog: IReturnData;
}
