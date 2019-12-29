import * as React from "react";
import { Card, Feed } from "semantic-ui-react";
import BlogStatistics from "./BlogStatistics";
import CommentStatistics from "./CommentStatistics";
import PageStatistics from "./PageStatistics";

const Statistics: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Bir Bakışta</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <BlogStatistics />
          <CommentStatistics />
          <PageStatistics />
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default Statistics;
