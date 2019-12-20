import * as React from "react";
import { Card, Divider } from "semantic-ui-react";
import LastBlogs from "./LastBlogs";

const LastBlogsTab: React.FC = () => (
  <Card className="blog-card" style={{ marginTop: "20px" }} fluid color="teal">
    <Card.Content>
      <Card.Header style={{ marginTop: "3px" }}>Son Eklenen</Card.Header>
      <Divider />
      <LastBlogs />
    </Card.Content>
  </Card>
);

export default LastBlogsTab;
