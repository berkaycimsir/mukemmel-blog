import * as React from "react";
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <Grid>
      <Grid.Column>
        <Form>
          <Segment color="teal">
            <Form.Input fluid placeholder="E-mail address" />
            <Form.Input fluid placeholder="Password" type="password" />

            <Button basic color="teal" fluid size="large">
              Giriş Yap
            </Button>
          </Segment>
        </Form>
        <Message color="teal">
          Hesabın yok mu? &nbsp;
          <NavLink to="/register" style={{ color: "teal" }}>
            Giriş Yap
          </NavLink>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
