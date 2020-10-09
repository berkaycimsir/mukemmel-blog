import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import LastBlogs from "./LastBlogs";

const LastBlogsTab: React.FC = () => (
  <Segment
    style={{
      marginTop: "20px",
      boxShadow:
        "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.24) !important",
    }}
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
