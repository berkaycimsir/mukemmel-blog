import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import LastFeeds from "./LastFeeds";

const LastFeedsTab: React.FC<any> = ({ activeUser }) => (
  <Segment
    style={{
      marginTop: "20px",
      boxShadow:
        "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.24) !important",
    }}
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
