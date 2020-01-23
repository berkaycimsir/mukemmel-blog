import { Feed, User } from "../../../types/database/DatabaseTypes";

export type Props = {
  id: string;
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

export interface UpdateFeedReturnData {
  updateFeed: boolean;
}

export interface UpdateFeedVariables {
  id: string;
  content: string;
}
