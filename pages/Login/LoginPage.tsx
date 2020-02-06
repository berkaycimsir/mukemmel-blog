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
import {
  IParseErrorMessageFunc,
  IOnClickFunc
} from "../../@types/types/functions/Login/types";
import OtherAuth from "../../components/Hoc/OtherAuth";

const LoginPage: React.FC<RouteComponentProps<Props>> = ({ history }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [login, { loading }] = useMutation<ReturnData, LoginVariables>(LOGIN);

  const formValidate: Function = (): boolean => {
    return !username || !password;
  };

  const resetInputValues: Function = (): void => {
    setUsername("");
    setPassword("");
  };

  const parseErrorMessage: IParseErrorMessageFunc = (
    data: ReturnData | undefined
  ): boolean => {
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

  const onLogin: IOnClickFunc = (e: React.FormEvent<HTMLFormElement>): void => {
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
          history.push("/");
          window.location.reload();
        }
      }
    );
  };

  return (
    <Container centered="true" style={{ marginTop: "50px", height: "500px" }}>
      <Segment padded color="blue">
        <Header textAlign="center" content="Giriş Yap" />
        <Divider />
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onLogin(e)}>
          <Input
            error={errorMessage !== null}
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
            error={errorMessage !== null}
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
            inverted
            style={{ marginTop: "15px" }}
            content={loading ? "Yükleniyor..." : "Giriş Yap"}
            type="submit"
            color="blue"
            disabled={formValidate()}
          />
        </Form>
      </Segment>
      <Message
        header="Giriş Yapın!"
        content="Bir sürü güzel blog yazısı ve eğlenceli içerikleri için giriş yapın."
      />
    </Container>
  );
};

export default OtherAuth(
  (session: any) => session && session.activeUser.user !== null
)(withRouter(LoginPage));
