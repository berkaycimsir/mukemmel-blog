import { Comment, User } from "../../../../types/DatabaseTypes";

export type Props = {
  blog_id: string;
  activeUser: User;
};

interface ReturnType {
  comment: Comment;
  errorMessage: string;
}

export interface AddCommentReturnData {
  createComment: ReturnType;
}

export interface AddCommentVariables {
  blog_id: string;
  user_id: string;
  content: string;
}
