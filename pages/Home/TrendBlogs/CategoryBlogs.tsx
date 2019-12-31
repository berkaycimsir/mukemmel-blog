import * as React from "react";
import { Grid } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GET_BLOGS_BY_CATEGORY } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import BlogCard from "../BlogCard";
import {
  GetBlogsByCategoryReturnData,
  GetBlogsByCategoryVariables
} from "../../../@types/interfaces/PageInterfaces/Categories/category.interfaces";
import { Blog } from "../../../@types/types/database/DatabaseTypes";

type Props = {
  category: string;
};

const CategoryBlogs: React.FC<Props> = ({ category }) => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsByCategoryReturnData,
    GetBlogsByCategoryVariables
  >(GET_BLOGS_BY_CATEGORY, {
    variables: { category }
  });

  if (getBlogsLoading) {
    return <Loading size={50} />;
  }

  const mostTrendBlogViews: number = Math.max.apply(
    Math,
    getBlogsData.getBlogByCategory.map(blog => blog.views)
  );

  const mostTrendBlog: Blog = getBlogsData.getBlogByCategory.find(
    blog => blog.views === mostTrendBlogViews
  );

  const blogs: Array<Blog> = getBlogsData.getBlogByCategory.slice(0, 4);

  return (
    <>
      <Grid columns={2} doubling>
        <Grid.Column width={8}>
          <BlogCard user={mostTrendBlog.user} blog={mostTrendBlog} />
        </Grid.Column>
        <Grid.Column>
          <Grid columns={4} doubling>
            {blogs.map(blog => {
              if (blog.title !== mostTrendBlog.title) {
                return (
                  <Grid.Column key={blog.id} widescreen={8}>
                    <BlogCard user={blog.user} key={blog.id} blog={blog} />
                  </Grid.Column>
                );
              }
            })}
          </Grid>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default CategoryBlogs;
