import * as React from "react";
import { Grid, Item } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GetTrendBlogsReturnType } from "../../@types/interfaces/PageInterfaces/Home/trendblogs.interfaces";
import { GET_TREND_BLOGS } from "../../graphql/Blog/query";
import Loading from "../../components/Loading/Loading";
import { NavLink } from "react-router-dom";

const Popular: React.FC = () => {
  const { data: getTrendBlogsData, loading: getTrendBlogsLoading } = useQuery<
    GetTrendBlogsReturnType
  >(GET_TREND_BLOGS);

  if (getTrendBlogsLoading) {
    return <Loading size={50} />;
  }

  return (
    <Grid>
      <Grid.Column>
        <Item.Group divided>
          {getTrendBlogsData.getTrendBlogs.map(blog => {
            if (blog.id !== window.location.pathname.split("/")[3])
              return (
                <Item key={blog.id}>
                  <Item.Content>
                    <NavLink to={`/blog/details/${blog.id}`}>
                      <h4>{blog.title}</h4>
                    </NavLink>
                    <Item.Meta
                      dangerouslySetInnerHTML={{
                        __html: blog.content.slice(0, 20) + "..."
                      }}
                    />
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

export default Popular;
