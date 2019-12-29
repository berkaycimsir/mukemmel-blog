import * as React from "react";
import { Grid, Card, Divider, Image, Icon } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import { BlogCardProps } from "../../@types/interfaces/PageInterfaces/Home/blogcard.interfaces";
import { NavLink } from "react-router-dom";
import { RemoveRedEye } from "@material-ui/icons";
import Moment from "react-moment";

const BlogCard: React.FC<BlogCardProps> = props => {
  const { id, title, views, img } = props.blog;
  const { username } = props.user;

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
