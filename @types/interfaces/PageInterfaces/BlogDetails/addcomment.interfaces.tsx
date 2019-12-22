import { Comment } from "../../../types/DatabaseTypes";

interface ReturnType {
  comment: Comment;
  errorMessage: string;
}

export interface AddCommentReturnData {
  addComment: ReturnType;
}

export interface AddCommentVariables {
  blog_id: string;
  user_id: string;
  content: string;
}
