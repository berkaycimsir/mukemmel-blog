import * as React from "react";
import { Grid, Item } from "semantic-ui-react";
import { useQuery, useMutation } from "react-apollo";
import { GET_BLOGS } from "../../graphql/Blog/query";
import Loading from "../../components/Loading/Loading";
import { GetBlogsReturnType } from "../../@types/interfaces/PageInterfaces/Home/allblogs.interfaces";
import { NavLink } from "react-router-dom";
import {
  UpdateBlogViewsReturnData,
  UpdateBlogViewsVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import { UPDATE_BLOG_VIEWS } from "../../graphql/Blog/mutation";

const LastBlogs: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnType
  >(GET_BLOGS);

  const [updateBlogViews] = useMutation<
    UpdateBlogViewsReturnData,
    UpdateBlogViewsVariables
  >(UPDATE_BLOG_VIEWS);

  if (getBlogsLoading) {
    return <Loading size={50} />;
  }

  const onClick: Function = (id: string) => {
    updateBlogViews({ variables: { id } });
  };

  return (
    <Grid>
      <Grid.Column>
        <Item.Group divided>
          {getBlogsData.blogs.slice(0, 3).map(blog => {
            if (blog.id !== window.location.pathname.split("/")[3])
              return (
                <Item key={blog.id}>
                  <Item.Image src={blog.img} size="tiny" />
                  <Item.Content>
                    <a
                      onClick={() => onClick(blog.id)}
                      href={`/blog/details/${blog.id}`}
                    >
                      <h4>{blog.title}</h4>
                    </a>
                    <Item.Description>
                      {blog.summary.slice(0, 60)}{" "}
                      <a
                        onClick={() => onClick(blog.id)}
                        href={`/blog/details/${blog.id}`}
                      >
                        ...Blog'a git
                      </a>
                    </Item.Description>
                    <Item.Extra>{blog.views} görüntülenme</Item.Extra>
                  </Item.Content>
                </Item>
              );
          })}
        </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default LastBlogs;
