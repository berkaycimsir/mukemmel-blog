import * as React from "react";
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react";

const Login: React.FC = () => {
  return (
    <Grid>
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
          <a style={{ color: "purple" }} href="#">
            Sign Up
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
