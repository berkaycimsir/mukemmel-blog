import { Comment, User } from "../../../types/database/DatabaseTypes";

export type Props = {
  activeUser: User;
};

export interface GetCommentsReturnData {
  comments: Array<Comment>;
}
