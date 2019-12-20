import * as React from "react";
import { Card, Divider, Image } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import { useEffect } from "react";

const BlogDetailsCard: React.FC<Props> = ({ blog }) => {
  const { id, title, content, img, views, tags, likes, createdAt } = blog;

  const convertStringContentToHtml = () => {
    let items = [];
    let frag = document.createRange().createContextualFragment(content);
    for (let i = 0; i < frag.children.length; i++) {
      items.push(frag.children.item(i));
    }
    return items.map(
      item => `<${item.localName}>${item.textContent}</${item.localName}>`
    );
  };

  return (
    <Card className="blog-card" color="violet" fluid centered>
      <Image src={img} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Divider />
        <Card.Description
          dangerouslySetInnerHTML={{ __html: convertStringContentToHtml() }}
          className="blog-detail-content"
        />
      </Card.Content>
    </Card>
  );
};

export default BlogDetailsCard;
