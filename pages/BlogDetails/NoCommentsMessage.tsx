import * as React from "react";
import { Message } from "semantic-ui-react";

const NoCommentsMessage: React.FC = () => (
  <Message color="red">
    <Message.Header>No Comments!</Message.Header>
    <Message.Content>
      There are no comments for this blog post.
      <br />
      Let's add one!
    </Message.Content>
  </Message>
);

export default NoCommentsMessage;
