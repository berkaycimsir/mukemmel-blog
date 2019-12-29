import { Blog, User, Comment } from "../../../types/DatabaseTypes";

export type Props = {
  totalItems: Array<Blog> | Array<Comment> | Array<User>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  itemsPerPage: number;
  scrollTo?: boolean;
};
