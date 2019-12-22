import { Blog, User, Comment } from "../../../types/Blog";

export type Props = {
  activeUser: User;
  comments: Array<Comment>;
  blog: Blog;
  user: User;
};
