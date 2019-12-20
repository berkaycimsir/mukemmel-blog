import * as React from "react";
import { Card, Divider, Image } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import Moment from "react-moment";

const BlogDetailsCard: React.FC<Props> = ({ blog }) => {
  const { id, title, content, img, views, tags, likes, createdAt } = blog;

  const sortedTags: Array<string> = tags.slice(0, 2);

  return (
    <Card className="blog-card" color="violet" fluid centered>
      <Image src={img} />
      <Card.Content>
        <h1 className="blog-details-title">
          {title}{" "}
          <span style={{ float: "right", fontSize: "13px", opacity: ".7" }}>
            <Moment toNow ago date={createdAt} /> ago
          </span>
        </h1>

        <Divider />
        <Card.Description
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-detail-content"
        />
      </Card.Content>
      <Card.Content extra>
        {sortedTags.map(tag => ` #${tag}`)} ...
        <span style={{ float: "right" }}>{views} görüntülenme</span>
      </Card.Content>
    </Card>
  );
};

export default BlogDetailsCard;
