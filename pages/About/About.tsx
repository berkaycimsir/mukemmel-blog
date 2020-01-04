import * as React from "react";
import {
  Segment,
  Header,
  Container,
  Divider,
  Grid,
  Image
} from "semantic-ui-react";
import AboutText from "./AboutText";

const About: React.FC = () => {
  return (
    <Container>
      <Segment padded color="teal">
        <Header textAlign="center" as="h2" content="Hakkımda" />
        <Divider />
        <Grid columns={1}>
          <Grid.Column>
            <Image
              centered
              src="https://i.ibb.co/8sp4j9M/software-engineers-work-at-home-vector.jpg"
              alt="image"
            />
          </Grid.Column>
          <Grid.Column className="blog-detail-content">
            <Header as="h3" content="Ben Berkay Çimşir," />
            <AboutText />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default About;
