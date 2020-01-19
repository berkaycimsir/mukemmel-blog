import { Feed, User } from "../../../types/database/DatabaseTypes";

export type Props = {
  reply_id: string;
  activeUser: User;
};

interface GetFeedByIdReturnType {
  feed: Feed;
  errorMessage: string;
}

export interface GetFeedByIdReturnData {
  feed: GetFeedByIdReturnType;
}

export interface GetFeedByIdVariables {
  id: string;
}

interface ReturnType {
  feed: Feed;
  errorMessage: string;
}

export interface ReplyFeedReturnData {
  addFeed: ReturnType;
}

export interface ReplyFeedVariables {
  reply_id: string;
  user_id: string;
  content: string;
}
