import * as React from "react";
import { Container, Grid, Card, Segment, Header } from "semantic-ui-react";
import SendFeed from "./SendFeed";

const Social: React.FC = () => {
  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Segment raised padded color="teal" fluid>
        <Header as="h2" textAlign="center" content="Feeds" />
        <Grid columns={1} stackable>
          <Grid.Column>
            <SendFeed />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Social;
