import { User } from "../../../types/Blog";

export interface Props {
  history: any;
}

export interface RegisterData {
  user: User;
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
}
