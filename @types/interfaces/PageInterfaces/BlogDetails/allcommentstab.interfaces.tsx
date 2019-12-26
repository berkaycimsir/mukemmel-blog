import { Comment, User } from "../../../types/DatabaseTypes";

export type Props = {
  activeUser: User;
};

export interface GetCommentsReturnData {
  comments: Array<Comment>;
}
