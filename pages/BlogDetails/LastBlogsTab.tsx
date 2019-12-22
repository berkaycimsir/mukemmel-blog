import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import LastBlogs from "./LastBlogs";

const LastBlogsTab: React.FC = () => (
  <Segment
    className="blog-card"
    style={{ marginTop: "20px" }}
    fluid
    color="teal"
  >
    <Card.Content>
      <Header style={{ marginTop: "3px" }}>Son Eklenen</Header>
      <Divider />
      <LastBlogs />
    </Card.Content>
  </Segment>
);

export default LastBlogsTab;
