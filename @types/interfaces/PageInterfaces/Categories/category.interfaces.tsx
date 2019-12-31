import { Blog } from "../../../types/database/DatabaseTypes";

export type Props = {
  session: any;
};

export interface GetBlogsByCategoryReturnData {
  getBlogByCategory: [Blog];
}

export interface GetBlogsByCategoryVariables {
  category: string;
}
