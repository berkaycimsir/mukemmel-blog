import * as React from "react";
import { Card, Divider, Image } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import { useEffect } from "react";

const BlogDetailsCard: React.FC<Props> = ({ blog }) => {
  const { id, title, content, img, views, tags, likes, createdAt } = blog;

  return (
    <Card className="blog-card" color="violet" fluid centered>
      <Image src={img} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Divider />
        <Card.Description
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-detail-content"
        />
      </Card.Content>
    </Card>
  );
};

export default BlogDetailsCard;
