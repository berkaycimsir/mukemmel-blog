import * as React from "react";
import { Card, Divider, Image } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import Moment from "react-moment";
import Comments from "./Comment/Comments";
import NoCommentsMessage from "./Comment/NoCommentsMessage";

const BlogDetailsCard: React.FC<Props> = ({
  activeUser,
  comments,
  blog,
  user
}) => {
  const { id, title, content, img, views, tags, likes, createdAt } = blog;
  const { username } = user;

  const sortedTags: Array<string> = tags.slice(0, 2);

  return (
    <Card className="blog-card" color="violet" fluid centered>
      <Image src={img} />
      <Card.Content>
        <h1 className="blog-details-title">{title} </h1>
        <Card.Meta>
          <span style={{ fontSize: "13px", opacity: ".7" }}>
            <Moment toNow ago date={createdAt} /> ago
          </span>
          <span style={{ float: "right" }}>@{username}</span>
        </Card.Meta>
        <Card.Meta>
          <span style={{ fontSize: "13px", opacity: ".7" }}>
            {sortedTags.map(tag => ` #${tag}`)} ...
          </span>
          <span style={{ float: "right" }}>{views} görüntülenme</span>
        </Card.Meta>

        <Divider />
        <Card.Description
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-detail-content"
        />
      </Card.Content>
      <Card.Content extra>
        {!comments || (comments.length === 0 && <NoCommentsMessage />)}
        <Comments activeUser={activeUser} comments={comments} />
      </Card.Content>
    </Card>
  );
};

export default BlogDetailsCard;
