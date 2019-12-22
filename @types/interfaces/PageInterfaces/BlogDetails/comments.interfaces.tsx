import { Comment, User } from "../../../types/DatabaseTypes";

export type Props = {
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
};
