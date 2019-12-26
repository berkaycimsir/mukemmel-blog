import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import Comments from "./Comments";

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
      <Comments activeUser={activeUser} />
    </Card.Content>
  </Segment>
);

export default CommentsTab;
