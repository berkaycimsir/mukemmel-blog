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
  Divider
} from "semantic-ui-react";
import {
  Props,
  ReturnData,
  RegisterVariables
} from "../../@types/interfaces/PageInterfaces/SignUp/signup.interfaces";
import { REGISTER } from "../../graphql/SignUp/mutations";

const SignUp: React.FC<RouteComponentProps<Props>> = ({ history }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [register, { loading }] = useMutation<ReturnData, RegisterVariables>(
    REGISTER
  );

  const formValidate = (): boolean => {
    return !name || !surname || !username || !email || !password;
  };

  const resetInputValues = (): void => {
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPassword("");
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
      variables: { name, surname, username, email, password }
    }).then(
      async ({ data }): Promise<void> => {
        resetInputValues();
        const canRegister = parseErrorMessage(data);
        setTimeout((): void => setErrorMessage(null), 2000);
        if (canRegister === true) {
          history.push("/");
        }
      }
    );
  };

  return (
    <Container centered="true" style={{ marginTop: "50px" }}>
      <Segment padded color="purple">
        <Header textAlign="center" content="Sign Up" />
        <Divider />
        <Form>
          <Input
            type="text"
            placeholder="name"
            value={name}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            placeholder="surname"
            value={surname}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSurname(e.target.value);
            }}
          />
          <Input
            style={{ marginTop: "15px" }}
            type="text"
            placeholder="Username"
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
            placeholder="password"
            value={password}
            fluid
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <Error errorMessage={errorMessage} />
          <Button
            style={{ marginTop: "15px" }}
            content={loading ? "Loading..." : "Register"}
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
