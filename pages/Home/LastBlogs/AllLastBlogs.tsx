import * as React from "react";
import { Tab, Grid, Item } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GET_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import BlogCard from "../BlogCard";
import { GetBlogsReturnType } from "../../../@types/interfaces/PageInterfaces/Home/bloglist.interfaces";
import { Blog } from "../../../@types/types/database/DatabaseTypes";

const AllLastBlogs: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnType
  >(GET_BLOGS);

  if (getBlogsLoading) {
    return <Loading size={50} />;
  }

  const blogs: Array<Blog> = getBlogsData.blogs.slice(0, 8);

  return (
    <>
      <Grid columns={4} doubling>
        {blogs.map(blog => (
          <Grid.Column key={blog.id} widescreen="8">
            <BlogCard user={blog.user} key={blog.id} blog={blog} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default AllLastBlogs;
