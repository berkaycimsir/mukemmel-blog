import * as React from "react";
import { Container, Grid, Segment, Header, Divider } from "semantic-ui-react";
import SendFeed from "./SendFeed";
import FeedList from "./FeedsList";

const Social: React.FC = () => {
  return (
    <Container>
      <Segment raised stacked color="violet">
        <Header as="h2" textAlign="center" content="Feeds" />
        <Divider />
        <SendFeed />
        <Divider />
        <FeedList />
      </Segment>
    </Container>
  );
};

export default Social;
