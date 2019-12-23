import { Comment } from "../../../types/DatabaseTypes";

export type Props = {
  id: string;
};

interface ReturnType {
  comment: Comment;
  errorMessage: string;
}

export interface LikeCommentReturnData {
  likeComment: ReturnType;
}

export interface LikeCommentVariables {
  id: string;
}
