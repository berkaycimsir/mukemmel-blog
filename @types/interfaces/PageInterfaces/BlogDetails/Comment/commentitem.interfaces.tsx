import { Comment, User } from "../../../../types/database/DatabaseTypes";

export type Props = {
  activeUserDeleteComment?: boolean;
  comment: Comment;
  activeUser: User;
};
