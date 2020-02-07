import * as React from "react";
import { Grid, Message } from "semantic-ui-react";
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

  const blogs: Array<Blog> = getBlogsData.getBlogByCategory.slice(0, 8);

  return (
    <>
      {blogs.length === 0 ? (
        <Message error size="large">
          <Message.Header>Burada hiç blog yok!</Message.Header>
          <Message.Content>
            Diğer bloglarımıza bakmak ister misin?
          </Message.Content>
        </Message>
      ) : (
        <Grid columns={4} doubling>
          {blogs.map(blog => (
            <Grid.Column key={blog.id} widescreen="8">
              <BlogCard user={blog.user} key={blog.id} blog={blog} />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CategoryBlogs;
