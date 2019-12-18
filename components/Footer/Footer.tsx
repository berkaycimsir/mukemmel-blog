import * as React from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Divider,
  Image,
  Button,
  Icon
} from "semantic-ui-react";

const Footer: React.FC = () => (
  <Segment className="footer" basic vertical>
    <Container textAlign="center">
      <Grid centered divided stackable>
        <Grid.Column>
          <Header textAlign="center" as="h4" content="Berkay'ın Bloğu" />
          <p style={{ textAlign: "center" }}>
            <Button
              as="a"
              href="https://github.com/berkaycimsir"
              target="_blank"
              color="grey"
            >
              Github
            </Button>
            <Button
              as="a"
              href="https://twitter.com/berkaycimsir"
              target="_blank"
              color="twitter"
            >
              Twitter
            </Button>
            <Button
              as="a"
              href="https://instagram.com/brky.js"
              target="_blank"
              color="instagram"
            >
              Instagram
            </Button>
          </p>
        </Grid.Column>
      </Grid>

      <Divider section />
      <Image
        centered
        size="mini"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfISJ80aijWwPIjStqGeNBeErlpkaY9Jyo3ykYycFn4h6UkbBf&s"
      />
      <List horizontal divided link size="small">
        <List.Item>&copy; 2019 Tüm Hakları Saklıdır</List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
