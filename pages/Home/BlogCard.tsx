import * as React from "react";
import { Grid, Card, Divider, Image, Icon } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import { BlogCardProps } from "../../@types/interfaces/PageInterfaces/Home/blogcard.interfaces";
import { NavLink } from "react-router-dom";

const BlogCard: React.FC<BlogCardProps> = props => {
  const { id, title, content, tags, likes, views, img, createdAt } = props.blog;

  const getRandomColor = (): SemanticCOLORS => {
    const colors: Array<SemanticCOLORS> = [
      "teal",
      "red",
      "blue",
      "violet",
      "purple",
      "green"
    ];

    const getRandomIndex = Math.floor(Math.random() * 6);
    return colors[getRandomIndex];
  };

  return (
    <Grid.Column widescreen={8}>
      <Card className="blog-card" color={getRandomColor()} fluid centered>
        <NavLink to={`/blog/details/${id}`}>
          <Image className="blog-card-img" src={img} />
        </NavLink>
        <Card.Content>
          <Card.Header className="blog-card-title">{title}</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default BlogCard;
