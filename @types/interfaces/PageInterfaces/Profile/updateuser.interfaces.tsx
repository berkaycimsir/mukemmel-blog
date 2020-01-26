export type Props = {
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface UpdateUserReturnData {
  update: boolean;
}

export interface UpdateUserVariables {
  id: string;
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  gender?: string;
}
