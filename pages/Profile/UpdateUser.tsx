import * as React from "react";
import { Input } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/Profile/updateuser.interfaces";

const UpdateUser: React.FC<Props> = ({ field, text, setUpdate }) => {
  return (
    <Input
      placeholder={`${field} için yeni değeri girin`}
      size="small"
      style={{ width: "60%" }}
      value={text}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate({ text: e.target.value, updating: true });
      }}
    />
  );
};

export default UpdateUser;
