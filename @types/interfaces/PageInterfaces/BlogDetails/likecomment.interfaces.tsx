import { Comment } from "../../../types/DatabaseTypes";

export type Props = {
  user_id: string;
  blog_id: string;
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
  isUnliking: boolean;
}
