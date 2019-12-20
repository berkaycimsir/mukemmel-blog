import * as React from "react";
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <Grid container>
      <Grid.Column>
        <Form>
          <Segment color="purple">
            <Form.Input fluid placeholder="E-mail address" />
            <Form.Input fluid placeholder="Password" type="password" />

            <Button basic color="purple" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message color="purple">
          New to us? &nbsp;
          <NavLink to="/signup" style={{ color: "purple" }} href="#">
            Sign Up
          </NavLink>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
