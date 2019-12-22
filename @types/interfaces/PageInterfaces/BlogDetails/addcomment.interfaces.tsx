import { Comment } from "../../../types/DatabaseTypes";

interface AddCommentData {
  comment: Comment;
  errorMessage: string;
}

export interface ReturnData {
  addComment: AddCommentData;
}

export interface AddCommentVariables {
  blog_id: string;
  user_id: string;
  content: string;
}
