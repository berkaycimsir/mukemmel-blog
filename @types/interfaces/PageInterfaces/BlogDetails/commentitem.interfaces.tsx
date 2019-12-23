import { Comment, User } from "../../../types/DatabaseTypes";

export type Props = {
  activeUserDeleteComment?: boolean;
  comment: Comment;
  activeUser: User;
};
