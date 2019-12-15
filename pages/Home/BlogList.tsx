import * as React from "react";
import { useQuery } from "react-apollo";
import { GET_LAST_FOUR_BLOG } from "../../graphql/Blog/query";
import { GetLastFourBlogReturnType } from "../../@types/interfaces/PageInterfaces/Home/bloglist.interfaces";
import Loading from "../../components/Loading/Loading";
import BlogCard from "./BlogCard";
import { Grid } from "semantic-ui-react";

const BlogList: React.FC = () => {
  const { data, error, loading } = useQuery<GetLastFourBlogReturnType>(
    GET_LAST_FOUR_BLOG
  );

  if (loading) return <Loading size={70} />;

  return (
    <>
      <Grid stackable centered columns={4}>
        {data.getLastFourBlog.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Grid>
    </>
  );
};

export default BlogList;
