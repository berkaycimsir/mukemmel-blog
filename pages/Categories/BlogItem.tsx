import * as React from "react";
import { Item, Button } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/Categories/blogitem.interfaces";
import { NavLink } from "react-router-dom";
import { Person, RemoveRedEye, WatchLater } from "@material-ui/icons";
import Moment from "react-moment";

const BlogItem: React.FC<Props> = ({ blog }) => {
  return (
    <Item>
      <Item.Image size="medium" src={blog.img} />

      <Item.Content>
        <Item.Header as="h1">
          <NavLink className="blog-item-title" to={`/blog/details/${blog.id}`}>
            {blog.title}
          </NavLink>
        </Item.Header>

        <Item.Meta>
          <span>@{blog.user.username}</span>
          <span style={{ marginLeft: "4px" }}>
            <Moment toNow ago date={blog.createdAt} /> ago
          </span>
          <span style={{ float: "right", marginLeft: "2px" }}>
            {blog.views}
          </span>
          <RemoveRedEye
            className="blog-card-icon"
            fontSize="small"
            style={{ float: "right" }}
          />
        </Item.Meta>

        <Item.Description
          style={{ lineHeight: "1.6", fontSize: "14px" }}
          dangerouslySetInnerHTML={{
            __html: blog.content.slice(0, 190) + "..."
          }}
        />
        <Item.Extra>
          <NavLink to={`/blog/details/${blog.id}`}>
            <Button primary content="Devamını oku =>" />
          </NavLink>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default BlogItem;
