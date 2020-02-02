import * as React from "react";
import { Card } from "semantic-ui-react";
import BlogEvents from "./BlogEvents";
import CommentEvents from "./CommentEvents";
import UserEvents from "./UserEvents";
import FeedEvents from "./FeedEvents";

const Events: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Etkinlik</Card.Header>
      </Card.Content>
      <Card.Content>
        <BlogEvents />
        <CommentEvents />
        <UserEvents />
        <FeedEvents />
      </Card.Content>
    </Card>
  );
};

export default Events;
