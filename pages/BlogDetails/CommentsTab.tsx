import * as React from "react";
import { Card, Divider, Segment, Header } from "semantic-ui-react";
import CommentsTabPart from "./CommentsTabPart";

const CommentsTab: React.FC<any> = ({ activeUser }) => (
  <Segment
    style={{
      marginTop: "20px",
      boxShadow:
        "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.24) !important",
    }}
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
