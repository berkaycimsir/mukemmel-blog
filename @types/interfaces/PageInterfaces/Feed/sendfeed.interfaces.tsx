import { User, Blog, Feed } from "../../../types/database/DatabaseTypes";

export type Props = {
  activeUser: User;
};

export interface GetBlogsReturnData {
  blogs: Blog[];
}

interface ReturnType {
  feed: Feed;
  errorMessage: string;
}

export interface AddFeedReturnData {
  addFeed: ReturnType;
}

export interface AddFeedVariables {
  blog_id: string;
  user_id: string;
  content: string;
}
