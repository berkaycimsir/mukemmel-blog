import { Comment, User } from "../../../types/DatabaseTypes";

export type Props = {
  activeUserDeleteComment?: any;
  activeUserComment?: Comment;
  comment: Comment;
  activeUser: User;
};
