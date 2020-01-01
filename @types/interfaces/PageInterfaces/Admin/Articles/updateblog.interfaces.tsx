import { Blog } from "../../../../types/database/DatabaseTypes";

export type Props = {
  session: any;
};

type ReturnType = {
  blog: Blog;
  errorMessage: string;
};

export interface UpdateBlogMutationReturnData {
  updateBlog: ReturnType;
}

export interface UpdateBlogMutationVariables {
  blog_id: string;
  title?: string;
  content?: string;
  summary?: string;
  tags?: Array<string>;
  img?: string;
  category?: string;
}
