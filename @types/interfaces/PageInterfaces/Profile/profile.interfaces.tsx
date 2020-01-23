import { User } from "../../../types/database/DatabaseTypes";

export interface GetUserByIdReturnData {
  user: User;
  errorMessage: string;
}

export interface GetUserByIdVariables {
  id: string;
}
