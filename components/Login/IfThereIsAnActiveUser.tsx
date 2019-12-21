import * as React from "react";
import { Card, Message, Divider } from "semantic-ui-react";
import Logout from "../Logout/Logout";
import Moment from "react-moment";

type Props = {
  session: any;
};

const IfThereIsAnActiveUser: React.FC<Props> = ({ session }) => {
  const { name, surname, username, createdAt } = session.activeUser.user;

  return (
    <Card fluid className="blog-card">
      <Card.Content>
        <Card.Header textAlign="center" className="if-active-user-title">
          Hoşgeldin, {name} {surname}
        </Card.Header>
        <Card.Meta className="if-active-user-meta">
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
      <Card.Content extra content={<Logout />} />
    </Card>
  );
};

export default IfThereIsAnActiveUser;
