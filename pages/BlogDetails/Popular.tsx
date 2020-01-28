import * as React from "react";
import { Grid, Item, Message } from "semantic-ui-react";
import { useQuery, useMutation } from "react-apollo";
import { GetTrendBlogsReturnType } from "../../@types/interfaces/PageInterfaces/Home/trendblogs.interfaces";
import { GET_TREND_BLOGS } from "../../graphql/Blog/query";
import Loading from "../../components/Loading/Loading";
import { NavLink } from "react-router-dom";
import {
  UpdateBlogViewsReturnData,
  UpdateBlogViewsVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetailscard.interfaces";
import { UPDATE_BLOG_VIEWS } from "../../graphql/Blog/mutation";
import { Blog } from "../../@types/types/database/DatabaseTypes";

const Popular: React.FC = () => {
  const { data: getTrendBlogsData, loading: getTrendBlogsLoading } = useQuery<
    GetTrendBlogsReturnType
  >(GET_TREND_BLOGS);

  const [updateBlogViews] = useMutation<
    UpdateBlogViewsReturnData,
    UpdateBlogViewsVariables
  >(UPDATE_BLOG_VIEWS);

  if (getTrendBlogsLoading) {
    return <Loading size={50} />;
  }

  const blogs: Blog[] = getTrendBlogsData.getTrendBlogs;

  const onClick: Function = (id: string) => {
    updateBlogViews({ variables: { id } });
  };

  return (
    <>
      {!blogs && (
        <Message
          header="Burada hiç blog yok!"
          content="Sanırım eklenmesini beklemeliyiz!"
        />
      )}
      <Grid>
        <Grid.Column>
          <Item.Group divided>
            {blogs.map(blog => {
              if (blog.id !== window.location.pathname.split("/")[3])
                return (
                  <Item key={blog.id}>
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
    </>
  );
};

export default Popular;
