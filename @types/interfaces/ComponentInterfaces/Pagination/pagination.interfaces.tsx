import { Blog } from "../../../types/DatabaseTypes";

export type Props = {
  totalBlogs: Array<Blog>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  blogsPerPage: number;
  scrollTo?: boolean;
};
