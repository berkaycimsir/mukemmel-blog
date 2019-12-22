import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import Popular from "./Popular";

const PopularTab: React.FC = () => (
  <Segment
    className="blog-card"
    style={{ marginTop: "20px" }}
    fluid
    color="blue"
  >
    <Card.Content>
      <Header style={{ marginTop: "3px" }}>Popüler</Header>
      <Divider />
      <Popular />
    </Card.Content>
  </Segment>
);

export default PopularTab;
