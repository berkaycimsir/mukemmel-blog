import { Blog } from "../../../types/DatabaseTypes";

export interface GetBlogsByCategoryReturnData {
  getBlogByCategory: [Blog];
}

export interface GetBlogsByCategoryVariables {
  category: string;
}
