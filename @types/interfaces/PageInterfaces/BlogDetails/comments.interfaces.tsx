import { Comment, User } from "../../../types/Blog";

export type Props = {
  activeUser: User;
  comments: Array<Comment>;
};
