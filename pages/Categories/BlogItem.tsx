import * as React from "react";
import { Item, Button } from "semantic-ui-react";
import { Props } from "../../@types/interfaces/PageInterfaces/Categories/blogitem.interfaces";
import { NavLink } from "react-router-dom";
import { RemoveRedEye } from "@material-ui/icons";
import Moment from "react-moment";
import { useMutation } from "react-apollo";
import {
  UpdateBlogViewsReturnData,
  UpdateBlogViewsVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import { UPDATE_BLOG_VIEWS } from "../../graphql/Blog/mutation";

const BlogItem: React.FC<Props> = ({ blog }) => {
  const [updateBlogViews] = useMutation<
    UpdateBlogViewsReturnData,
    UpdateBlogViewsVariables
  >(UPDATE_BLOG_VIEWS);

  const onClick: Function = (id: string) => {
    updateBlogViews({ variables: { id } });
  };

  return (
    <Item>
      <Item.Image size="medium" src={blog.img} />

      <Item.Content>
        <Item.Header as="h1">
          <a
            onClick={() => onClick(blog.id)}
            className="blog-item-title"
            href={`/blog/details/${blog.id}`}
          >
            {blog.title}
          </a>
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
          content={blog.summary}
        />
        <Item.Extra>
          <a onClick={() => onClick(blog.id)} href={`/blog/details/${blog.id}`}>
            <Button primary content="Devamını oku =>" />
          </a>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default BlogItem;
