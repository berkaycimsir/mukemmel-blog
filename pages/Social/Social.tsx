import * as React from "react";
import { Container, Grid, Segment, Header, Divider } from "semantic-ui-react";
import SendFeed from "./SendFeed";
import FeedList from "./FeedsList";

const Social: React.FC = () => {
  return (
    <Container>
      <Segment stacked color="violet">
        <Header as="h2" textAlign="center" content="Feeds" />
        <Divider />
        <Grid columns={1} stackable>
          <Grid.Column>
            <SendFeed />
            <Divider />
            <FeedList />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Social;
