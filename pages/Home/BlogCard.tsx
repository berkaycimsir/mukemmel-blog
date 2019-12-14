import * as React from "react";
import { Grid, Card, Divider, Image } from "semantic-ui-react";
import { BlogCardProps } from "../../interfaces/PageInterface/Home/bloglist.interfaces";

const BlogCard: React.FC<BlogCardProps> = props => {
  const { title, content, tags, likes, createdAt } = props.blog;
  const img = "https://via.placeholder.com/200";

  return (
    <Grid.Column>
      <Card fluid centered>
        <Image src={img} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{content.slice(0, 100)}...</Card.Meta>
          <Card.Description>{createdAt}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>{likes}</p>
          <p>{tags.map(tag => tag)}</p>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default BlogCard;
