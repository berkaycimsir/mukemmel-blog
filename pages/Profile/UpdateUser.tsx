import * as React from "react";
import {
  Input,
  Form,
  Button,
  Select,
  DropdownProps,
  Message
} from "semantic-ui-react";
import {
  Props,
  UpdateUserReturnData,
  UpdateUserVariables
} from "../../@types/interfaces/PageInterfaces/Profile/updateuser.interfaces";
import { useMutation } from "react-apollo";
import { UPDATE } from "../../graphql/User/mutations";
import { USER } from "../../graphql/User/query";

const UpdateUser: React.FC<Props> = ({ id, setUpdating }) => {
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");

  const [update, { loading }] = useMutation<
    UpdateUserReturnData,
    UpdateUserVariables
  >(UPDATE, {
    refetchQueries: [{ query: USER, variables: { id } }]
  });

  const formValidate = (): boolean => {
    return !name && !surname && !username && !email && !gender;
  };

  const onUpdateUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    update({ variables: { id, name, surname, username, email, gender } }).then(
      () => {
        setName("");
        setSurname("");
        setUsername("");
        setEmail("");
        setGender("");
        !loading && setUpdating(false);
      }
    );
  };

  return (
    <Form>
      <Message
        size="small"
        info
        content="Tüm seçenekler isteğe bağlıdır. Sadece güncellemek istediğiniz yeri giriniz! (All fields are optional. Only enter the value of whatever field you want!)"
      />
      <Input
        type="text"
        placeholder="ad (name)"
        fluid
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <Input
        style={{ marginTop: "15px" }}
        type="text"
        placeholder="soyad (surname)"
        fluid
        value={surname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSurname(e.target.value);
        }}
      />
      <Input
        style={{ marginTop: "15px" }}
        type="text"
        placeholder="kullanıcı adı (username)"
        fluid
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        style={{ marginTop: "15px" }}
        type="text"
        placeholder="email"
        fluid
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />
      <Select
        style={{ marginTop: "15px" }}
        placeholder="Cinsiyet (gender)"
        options={[
          { text: "Erkek (men)", value: "men" },
          { text: "Kadın (women)", value: "women" }
        ]}
        fluid
        value={gender}
        onChange={(_, data: DropdownProps) => {
          setGender(data.value as string);
        }}
        onC
      />
      <div style={{ marginTop: "15px" }}>
        <Button
          loading={loading}
          disabled={loading || formValidate()}
          color="green"
          inverted
          content="Tamamla"
          size="small"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onUpdateUser(e)}
        />
        <Button
          loading={loading}
          disabled={loading}
          color="red"
          inverted
          content="Vazgeç"
          size="small"
          onClick={() => setUpdating(false)}
        />
      </div>
    </Form>
  );
};

export default UpdateUser;
