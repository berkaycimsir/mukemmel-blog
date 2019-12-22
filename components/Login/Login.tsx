import * as React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Error from "../../components/Error/Error";
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";
import {
  Input,
  Button,
  Form,
  Segment,
  Header,
  Divider,
  Message
} from "semantic-ui-react";
import {
  Props,
  ReturnData,
  LoginVariables
} from "../../@types/interfaces/PageInterfaces/Login/login.interfaces";
import { LOGIN } from "../../graphql/User/mutations";

const Login: React.FC<RouteComponentProps<Props>> = ({ history }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [login, { loading }] = useMutation<ReturnData, LoginVariables>(LOGIN);

  const formValidate = (): boolean => {
    return !username || !password;
  };

  const resetInputValues = (): void => {
    setUsername("");
    setPassword("");
  };

  const parseErrorMessage = (data: ReturnData | undefined): boolean => {
    let error: any;
    if (data !== undefined && data.login.errorMessage !== "No error.") {
      error = data.login.errorMessage;
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
    login({
      variables: { username, password }
    }).then(
      async ({ data }): Promise<void> => {
        resetInputValues();
        const canLogin = parseErrorMessage(data);
        setTimeout((): void => setErrorMessage(null), 2000);
        if (canLogin === true) {
          const getToken = (): string => {
            return data && data !== undefined ? data.login.token.token : null;
          };
          localStorage.setItem("token", getToken());
          window.location.reload();
        }
      }
    );
  };

  return (
    <Segment className="blog-card" padded color="purple">
      <Header textAlign="center" content="Giriş Yap" />
      <Divider />
      <Form>
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
          type="password"
          placeholder="şifre (password)"
          value={password}
          fluid
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <Error errorMessage={errorMessage} />
        <Button
          style={{ marginTop: "15px" }}
          content={loading ? "Yükleniyor..." : "Giriş Yap"}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
          basic
          type="button"
          color="purple"
          disabled={formValidate()}
        />
        <Divider />
        <Message>
          <Message.Content>
            Hesabın Yok Mu ?{" "}
            <NavLink to="/signup">
              <b>Kayıt Ol</b>
            </NavLink>
          </Message.Content>
        </Message>
      </Form>
    </Segment>
  );
};

export default withRouter(Login);
