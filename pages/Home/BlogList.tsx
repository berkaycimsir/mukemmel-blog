import * as React from "react";
import { useQuery } from "react-apollo";
import { GET_BLOGS } from "../../graphql/Blog/query";
import { GetBlogsReturnType } from "../../interfaces/PageInterface/Home/bloglist.interfaces";
import Loading from "../../components/Loading/Loading";
import BlogCard from "./BlogCard";
import { Grid, Card } from "semantic-ui-react";

const BlogList: React.FC = () => {
  const { data, error, loading } = useQuery<GetBlogsReturnType>(GET_BLOGS);

  if (loading) return <Loading />;

  return (
    <>
      <Grid stackable centered columns={4}>
        {data.blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default BlogList;
