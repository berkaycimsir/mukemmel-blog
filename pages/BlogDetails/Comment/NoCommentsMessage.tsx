import * as React from "react";
import { Message } from "semantic-ui-react";

const NoCommentsMessage: React.FC = () => (
  <Message error>
    <Message.Header>Burada Hiç Yorum Yok!</Message.Header>
    <Message.Content>
      Bu blog için hiç yorum yapılmamış!
      <br />
      Yorum yapmaya ne dersin?
    </Message.Content>
  </Message>
);

export default NoCommentsMessage;
