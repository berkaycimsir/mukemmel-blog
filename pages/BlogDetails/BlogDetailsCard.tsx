import * as React from "react";
import { Card, Divider, Image, Header } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import Moment from "react-moment";
import Comments from "./Comment/Comments";
import NoCommentsMessage from "./Comment/NoCommentsMessage";
import { RemoveRedEye, WatchLater } from "@material-ui/icons";

const BlogDetailsCard: React.FC<Props> = ({
  activeUser,
  comments,
  blog,
  user
}) => {
  const { id, title, content, img, views, tags, createdAt } = blog;
  const { username } = user;

  const sortedTags: Array<string> = tags.slice(0, 2);

  return (
    <Card className="blog-card" color="violet" fluid centered>
      <Image src={img} />
      <Card.Content>
        <h1 className="blog-details-title">{title} </h1>
        <Card.Meta>
          <WatchLater fontSize="small" />
          <span style={{ opacity: ".9" }}>
            <Moment toNow ago date={createdAt} /> ago
          </span>
          <span style={{ float: "right" }}>@{username}</span>
        </Card.Meta>
        <Card.Meta>
          <span style={{ opacity: ".9" }}>
            {sortedTags.map(tag => ` #${tag}`)} ...
          </span>
          <span style={{ float: "right", marginLeft: "2px" }}>{views}</span>
          <RemoveRedEye style={{ float: "right" }} />
        </Card.Meta>
        <Divider />
        <Card.Description
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-detail-content"
        />
      </Card.Content>
      <Card.Content extra>
        <Header style={{ marginTop: "5px" }} content="Yorumlar" />
        <Divider />
        {!comments || (comments.length === 0 && <NoCommentsMessage />)}
        <Comments blog_id={id} activeUser={activeUser} comments={comments} />
      </Card.Content>
    </Card>
  );
};

export default BlogDetailsCard;
