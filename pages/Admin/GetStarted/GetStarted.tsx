import * as React from "react";
import { Grid, Header, Divider, Container, Segment } from "semantic-ui-react";
import Statistics from "./Statistics/Statistics";
import Events from "./Events/Events";

const GetStarted: React.FC = () => {
  return (
    <Segment basic padded="very">
      <Container>
        <Header as="h2" content="Başlangıç" />
        <Divider />
        <Grid stackable>
          <Grid.Column width={16}>
            <Statistics />
          </Grid.Column>
          <Grid.Column width={16}>
            <Events />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default GetStarted;
