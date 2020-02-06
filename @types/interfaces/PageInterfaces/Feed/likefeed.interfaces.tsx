import { User } from "../../../types/database/DatabaseTypes";

export type Props = {
  id: string;
  activeUser: User;
};

export interface LikeFeedReturnData {
  likeComment: boolean;
}

export interface LikeFeedVariables {
  id: string;
  isUnliking: boolean;
}
