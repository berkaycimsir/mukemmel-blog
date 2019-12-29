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

const GetStarted: React.FC = () => {
  return (
    <Segment basic padded="very">
      <Container>
        <Header as="h2" content="Başlangıç" />
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Statistics />
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src="/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <Image src="/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src="/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default GetStarted;
