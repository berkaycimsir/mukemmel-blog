import * as React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Error from "../../components/Error/Error";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Input,
  Button,
  Form,
  Container,
  Card,
  Segment,
  Header,
  Divider,
  Checkbox
} from "semantic-ui-react";
import {
  Props,
  ReturnData,
  RegisterVariables
} from "../../@types/interfaces/PageInterfaces/SignUp/signup.interfaces";
import { REGISTER } from "../../graphql/User/mutations";

const SignUp: React.FC<RouteComponentProps<Props>> = ({ history }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [menGender, setMenGender] = useState<boolean>(false);
  const [womenGender, setWomenGender] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [register, { loading }] = useMutation<ReturnData, RegisterVariables>(
    REGISTER
  );

  const formValidate = (): boolean => {
    return (
      !name ||
      !surname ||
      !username ||
      !email ||
      !password ||
      (!menGender && !womenGender)
    );
  };

  const resetInputValues = (): void => {
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setMenGender(false);
    setWomenGender(false);
  };

  const parseErrorMessage = (data: ReturnData | undefined): boolean => {
    let error: any;
    if (data !== undefined && data.register.errorMessage !== "No error.") {
      error = data.register.errorMessage;
      setErrorMessage(error);
      return false;
    } else {
      error = null;
      setErrorMessage(error);
      return true;
    }
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    register({
      variables: {
        name,
        surname,
        username,
        email,
        password,
        gender:
          (menGender === true && "men") || (womenGender === true && "women")
      }
    }).then(
      async ({ data }): Promise<void> => {
        resetInputValues();
        const canRegister = parseErrorMessage(data);
        setTimeout((): void => setErrorMessage(null), 2000);
        if (canRegister === true) {
          const getToken = (): string => {
            if (data && data !== undefined) {
              return data.register.token.token;
            } else {
              return null;
            }
          };
          localStorage.setItem("token", getToken());
          history.push("/");
          window.location.reload();
        }
      }
    );
  };

  return (
    <Container centered="true" style={{ marginTop: "50px" }}>
      <Segment padded color="purple">
        <Header textAlign="center" content="Kayıt Ol" />
        <Divider />
        <Form>
          <Input
            type="text"
            placeholder="ad (name)"
            value={name}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            placeholder="soyad (surname)"
            value={surname}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSurname(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            placeholder="kullanıcı adı (username)"
            value={username}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            placeholder="email"
            value={email}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="password"
            placeholder="şifre (password)"
            value={password}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <div style={{ marginTop: "15px" }}>
            <Checkbox
              onClick={() => {
                setMenGender(!menGender);
                setWomenGender(false);
              }}
              label="Erkek (men)"
              value="men"
              checked={menGender}
            />{" "}
            &nbsp;
            <Checkbox
              onClick={() => {
                setWomenGender(!womenGender);
                setMenGender(false);
              }}
              label="Kadın (women)"
              value="women"
              checked={womenGender}
            />
          </div>
          <Error errorMessage={errorMessage} />
          <Button
            style={{ marginTop: "15px" }}
            content={loading ? "Yükleniyor..." : "Kayıt Ol"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
            type="button"
            color="purple"
            disabled={formValidate()}
          />
        </Form>
      </Segment>
    </Container>
  );
};

export default withRouter(SignUp);
