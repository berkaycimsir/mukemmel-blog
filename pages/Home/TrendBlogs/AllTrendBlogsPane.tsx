import * as React from "react";
import { Tab, Grid, Item } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import {
  GetTrendBlogsReturnType,
  GetMostTrendBlogReturnType
} from "../../../@types/interfaces/PageInterfaces/Home/trendblogs.interfaces";
import {
  GET_TREND_BLOGS,
  GET_MOST_TREND_BLOG
} from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import BlogCard from "../BlogCard";
import { Blog } from "../../../@types/types/Blog";

const AllTrendBlogsPane: React.FC = () => {
  const { data: getTrendBlogsData, loading: getTrendBlogsLoading } = useQuery<
    GetTrendBlogsReturnType
  >(GET_TREND_BLOGS);

  const {
    data: getMostTrendBlogData,
    loading: getMostTrendBlogLoading
  } = useQuery<GetMostTrendBlogReturnType>(GET_MOST_TREND_BLOG);

  if (getTrendBlogsLoading || getMostTrendBlogLoading) {
    return <Loading size={50} />;
  }

  const mostTrendBlog: Blog = getMostTrendBlogData.getMostTrendBlog.blog;

  return (
    <Grid columns={2} doubling>
      <Grid.Column width={8}>
        <BlogCard blog={mostTrendBlog} />
      </Grid.Column>
      <Grid.Column>
        <Grid columns={4} doubling>
          {getTrendBlogsData.getTrendBlogs.map(blog => {
            if (blog.title !== mostTrendBlog.title) {
              return (
                <Grid.Column widescreen={8}>
                  <BlogCard key={blog.id} blog={blog} />
                </Grid.Column>
              );
            }
          })}
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default AllTrendBlogsPane;
