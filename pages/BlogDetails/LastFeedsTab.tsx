import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import LastFeeds from "./LastFeeds";

const LastFeedsTab: React.FC<any> = ({ activeUser }) => (
  <Segment
    className="blog-card"
    style={{ marginTop: "20px" }}
    fluid
    color="purple"
  >
    <Card.Content>
      <Header style={{ marginTop: "3px" }}>Son Feeds</Header>
      <Divider />
      <LastFeeds activeUser={activeUser} />
    </Card.Content>
  </Segment>
);

export default LastFeedsTab;
