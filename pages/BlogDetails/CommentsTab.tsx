import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import CommentsTabPart from "./CommentsTabPart";

const CommentsTab: React.FC<any> = ({ activeUser }) => (
  <Segment
    className="blog-card"
    style={{ marginTop: "20px" }}
    fluid
    color="brown"
  >
    <Card.Content>
      <Header style={{ marginTop: "3px" }}>Son yorumlar</Header>
      <Divider />
      <CommentsTabPart activeUser={activeUser} />
    </Card.Content>
  </Segment>
);

export default CommentsTab;
