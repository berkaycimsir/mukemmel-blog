import { Comment, User } from "../../../types/database/DatabaseTypes";

export type Props = {
  activeUser: User;
  isDivided?: boolean;
};

export interface GetCommentsReturnData {
  comments: Array<Comment>;
}
