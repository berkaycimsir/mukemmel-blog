import { User } from "../../../types/Blog";

export interface Props {
  history: any;
}

export interface LoginData {
  user: User;
  errorMessage: string;
}

export interface ReturnData {
  login: LoginData;
}

export interface LoginVariables {
  username: string;
  password: string;
}
