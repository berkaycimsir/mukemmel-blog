import { Blog } from "../../../../../types/database/DatabaseTypes";

export type Props = {
  content: string;
};

type ReturnType = {
  blog: Blog;
  errorMessage: string;
};

export interface AddBlogMutationReturnData {
  createBlog: ReturnType;
}

export interface AddBlogMutationVariables {
  owner_id: string;
  title: string;
  content: string;
  summary: string;
  tags: Array<string>;
  img: string;
  category: string;
}
