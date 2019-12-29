import * as React from "react";
import {
  Grid,
  Image,
  Header,
  Divider,
  Container,
  Segment
} from "semantic-ui-react";
import Statistics from "./Statistics";
import Events from "./Events";

const GetStarted: React.FC = () => {
  return (
    <Segment basic padded="very">
      <Container>
        <Header as="h2" content="Başlangıç" />
        <Divider />
        <Grid stackable>
          <Grid.Column width={8}>
            <Statistics />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column width={8}>
            <Events />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src="/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default GetStarted;
