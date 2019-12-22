import { Comment, User } from "../../../types/Blog";

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
