import { User } from "../../../types/DatabaseTypes";

export interface Props {
  history: any;
}

type Token = {
  token: string;
};

export interface RegisterData {
  token: Token;
  errorMessage: string;
}

export interface ReturnData {
  register: RegisterData;
}

export interface RegisterVariables {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  gender: string;
}
