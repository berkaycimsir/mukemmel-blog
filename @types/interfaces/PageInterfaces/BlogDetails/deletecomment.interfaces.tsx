import { Comment } from "../../../types/DatabaseTypes";

export type Props = {
  id: string;
};

interface ReturnType {
  comment: Comment;
  errorMessage: string;
}

export interface DeleteCommentReturnData {
  deleteComment: ReturnType;
}

export interface DeleteCommentVariables {
  id: string;
}
