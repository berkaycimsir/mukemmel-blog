import * as React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import { BlogCardProps } from "../../@types/interfaces/PageInterfaces/Home/blogcard.interfaces";
import { RemoveRedEye } from "@material-ui/icons";
import { getRandomColor } from "../../utils/functions/getRandomSemanticColor";

const BlogCard: React.FC<BlogCardProps> = props => {
  const { id, title, views, img } = props.blog;
  const { username } = props.user;

  return (
    <Grid.Column widescreen={8}>
      <Card className="blog-card" color={getRandomColor()} fluid centered>
        <a href={`/blog/details/${id}`}>
          <Image className="blog-card-img" src={img} />
        </a>
        <Card.Content>
          <Card.Header className="blog-card-title">
            <span>{title}</span>
          </Card.Header>
          <Card.Meta className="blog-card-meta">
            <span>@{username}</span>
            <span style={{ float: "right", marginLeft: "2px" }}>{views}</span>
            <RemoveRedEye
              className="blog-card-icon"
              fontSize="small"
              style={{ float: "right" }}
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default BlogCard;
