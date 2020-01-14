import * as React from "react";
import { Card, Form, Image, Grid } from "semantic-ui-react";

const SendFeed: React.FC = () => {
  return (
    <Form reply>
      <Form.TextArea style={{ minHeight: "200px" }} placeholder="Feed Gönder" />
    </Form>
  );
};

export default SendFeed;
