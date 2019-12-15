import * as React from "react";
import { Tab, Grid, Item } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GetTrendBlogsReturnType } from "../../../@types/interfaces/PageInterfaces/Home/trendblogs.interfaces";
import { GET_TREND_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import BlogCard from "../BlogCard";

const AllTrendBlogsPane: React.FC = () => {
  const { data, error, loading } = useQuery<GetTrendBlogsReturnType>(
    GET_TREND_BLOGS
  );

  if (loading) return <Loading size={50} />;

  return (
    <Grid columns={2} stackable>
      {data.getTrendBlogs.map(blog => (
        <Grid.Column key={blog.id}>
          <BlogCard blog={blog} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default AllTrendBlogsPane;
