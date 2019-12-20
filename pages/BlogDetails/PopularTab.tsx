import * as React from "react";
import { Card, Divider } from "semantic-ui-react";
import Popular from "./Popular";

const PopularTab: React.FC = () => (
  <Card className="blog-card" style={{ marginTop: "20px" }} fluid color="teal">
    <Card.Content>
      <Card.Header style={{ marginTop: "3px" }}>Popüler</Card.Header>
      <Divider />
      <Popular />
    </Card.Content>
  </Card>
);

export default PopularTab;
