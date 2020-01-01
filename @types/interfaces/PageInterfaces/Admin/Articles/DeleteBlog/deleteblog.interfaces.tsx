import { Blog } from "../../../../../types/database/DatabaseTypes";

export type Props = {
  id: string;
};

interface ReturnType {
  blog: Blog;
  errorMessage: string;
}

export interface DeleteBlogReturnData {
  deleteBlog: ReturnType;
}

export interface DeleteBlogVariables {
  id: string;
}
