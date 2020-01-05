import { Blog, User, Comment } from "../../../types/database/DatabaseTypes";

export type Props = {
  activeUser: User;
  comments: Array<Comment>;
  blog: Blog;
  user: User;
};

export type UpdateBlogViewsReturnData = boolean;

export interface UpdateBlogViewsVariables {
  id: string;
}
