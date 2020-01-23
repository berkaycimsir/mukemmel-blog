import { User } from "../../../types/database/DatabaseTypes";

type ReturnType = {
  user: User;
  errorMessage: string;
};

export interface GetUserByIdReturnData {
  user: ReturnType;
}

export interface GetUserByIdVariables {
  id: string;
}
