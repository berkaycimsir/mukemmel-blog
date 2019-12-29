import * as React from "react";
import { Grid, Item } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GET_BLOGS } from "../../graphql/Blog/query";
import Loading from "../../components/Loading/Loading";
import { GetBlogsReturnType } from "../../@types/interfaces/PageInterfaces/Home/allblogs.interfaces";
import { NavLink } from "react-router-dom";

const LastBlogs: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnType
  >(GET_BLOGS);

  if (getBlogsLoading) {
    return <Loading size={50} />;
  }
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
                    <NavLink to={`/blog/details/${blog.id}`}>
                      <h4>{blog.title}</h4>
                    </NavLink>
                    <Item.Meta
                      dangerouslySetInnerHTML={{
                        __html: blog.content.slice(0, 18) + "..."
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

export default LastBlogs;
