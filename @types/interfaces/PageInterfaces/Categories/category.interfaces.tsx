import { Blog } from "../../../types/DatabaseTypes";

export type Props = {
  session: any;
};

export interface GetBlogsByCategoryReturnData {
  getBlogByCategory: [Blog];
}

export interface GetBlogsByCategoryVariables {
  category: string;
}
