import * as React from "react";
import {
  Input,
  Form,
  Button,
  Select,
  DropdownProps,
  Message
} from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/Profile/updateuser.interfaces";

const UpdateUser: React.FC<Props> = ({ setUpdating }) => {
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");

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
        onChange={(data: DropdownProps) => {
          setGender(data.value as string);
        }}
      />
      <div style={{ marginTop: "15px" }}>
        <Button color="green" inverted content="Tamamla" size="small" />
        <Button
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
