import { User } from "../../../types/DatabaseTypes";

export interface Props {
  history: any;
}

type Token = {
  token: string;
};

export interface LoginData {
  token: Token;
  errorMessage: string;
}

export interface ReturnData {
  login: LoginData;
}

export interface LoginVariables {
  username: string;
  password: string;
}
