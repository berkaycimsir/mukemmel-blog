import * as React from "react";
import { Card, Message, Divider, Segment, Header } from "semantic-ui-react";
import Logout from "../Logout/Logout";
import Moment from "react-moment";

type Props = {
  session: any;
};

const IfThereIsAnActiveUser: React.FC<Props> = ({ session }) => {
  const { name, surname, username, createdAt } = session.activeUser.user;

  return (
    <Segment
      color="blue"
      style={{
        boxShadow:
          "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.24) !important",
      }}
    >
      <Card.Content>
        <Header textAlign="center" className="if-active-user-title">
          Hoşgeldin, {name} {surname}
        </Header>
        <Card.Meta style={{ opacity: 0.7 }} className="if-active-user-meta">
          <span>@{username}</span>
          <span style={{ float: "right" }}>
            <Moment date={createdAt} fromNow ago /> ago
          </span>
        </Card.Meta>
        <Divider />
        <Card.Description>
          <Message color="blue">
            <Message.Header content="Bizi tercih ettiğin için teşekkürler!" />
            <Message.Content content="Çıkış yapmak için tıklayınız." />
          </Message>
        </Card.Description>
      </Card.Content>
      <Divider />
      <Card.Content extra content={<Logout />} />
    </Segment>
  );
};

export default IfThereIsAnActiveUser;
