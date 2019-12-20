import * as React from "react";
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <Grid container>
      <Grid.Column>
        <Form className="blog-card">
          <Segment color="teal">
            <Form.Input fluid placeholder="E-mail address" />
            <Form.Input fluid placeholder="Password" type="password" />

            <Button color="teal" fluid size="large">
              Giriş Yap
            </Button>
          </Segment>
        </Form>
        <Message color="teal">
          Hesabın yok mu? &nbsp;
          <NavLink to="/signup" style={{ color: "teal" }}>
            Kayıt Ol
          </NavLink>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
