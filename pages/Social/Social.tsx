import * as React from "react";
import { Container, Grid, Segment, Header, Divider } from "semantic-ui-react";
import SendFeed from "./SendFeed";
import FeedList from "./FeedsList";
import { User } from "../../@types/types/database/DatabaseTypes";

type Props = {
  session: any;
};

const Social: React.FC<Props> = ({ session }) => {
  const activeUser: User =
    session && session.activeUser.user !== null && session.activeUser.user;

  return (
    <Container>
      <Segment raised stacked color="violet">
        <Header as="h2" textAlign="center" content="Feeds" />
        <Divider />
        <SendFeed activeUser={activeUser} />
        <Divider />
        <FeedList activeUser={activeUser} />
      </Segment>
    </Container>
  );
};

export default Social;
