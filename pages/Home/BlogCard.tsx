import * as React from "react";
import { Grid, Card, Divider, Image, Icon } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import { BlogCardProps } from "../../@types/interfaces/PageInterfaces/Home/blogcard.interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as eye } from "@fortawesome/free-solid-svg-icons";

const BlogCard: React.FC<BlogCardProps> = props => {
  const { title, content, tags, likes, views, img, createdAt } = props.blog;

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
    <Grid.Column widescreen="8">
      <Card className="blog-card" color={getRandomColor()} fluid centered>
        <Image as="a" className="blog-card-img" src={img} />
        <Card.Content>
          <Card.Header className="blog-card-title">
            {title}
            <span
              style={{ float: "right", marginLeft: "4px", fontSize: "13px" }}
            >
              {views}
            </span>
            <img
              className="icon"
              src="https://image.flaticon.com/icons/png/512/13/13924.png"
              alt="Eye looking up free icon"
              title="Eye looking up free icon"
              style={{ float: "right" }}
            />
          </Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default BlogCard;
