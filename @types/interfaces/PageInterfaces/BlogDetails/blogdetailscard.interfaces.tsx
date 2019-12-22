import { Blog, User, Comment } from "../../../types/DatabaseTypes";

export type Props = {
  activeUser: User;
  comments: Array<Comment>;
  blog: Blog;
  user: User;
};
