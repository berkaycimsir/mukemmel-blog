import { Blog, User, Comment } from "../../../types/Blog";

export type Props = {
  comments: Array<Comment>;
  blog: Blog;
  user: User;
};
