import { Comment, User } from "../../../../types/database/DatabaseTypes";

export type Props = {
  blog_id: string;
  activeUser: User;
  comments: Array<Comment>;
};

type returnType = {
  comment: Comment;
  errorMessage: string;
};

export type GetCommentByUserIdReturnData = {
  getCommentByUserId: returnType;
};

export type GetCommentByUserIdVariables = {
  user_id: string;
  blog_id: string;
};
