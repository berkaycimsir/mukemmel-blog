import { Comment } from "../../../types/DatabaseTypes";

export type Props = {
  blog_id: string;
  user_id: string;
  id: string;
};

interface ReturnType {
  comment: Comment;
  errorMessage: string;
}

export interface UpdateCommentReturnData {
  updateComment: ReturnType;
}

export interface UpdateCommentVariables {
  id: string;
  content: string;
}
