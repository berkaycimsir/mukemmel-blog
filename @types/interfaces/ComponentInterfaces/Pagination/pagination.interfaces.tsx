import {
  Blog,
  User,
  Comment,
  Feed
} from "../../../types/database/DatabaseTypes";

export type Props = {
  totalItems: Array<Blog> | Array<Comment> | Array<User> | Array<Feed>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  itemsPerPage: number;
  scrollTo?: boolean;
};
