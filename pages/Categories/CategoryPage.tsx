import * as React from "react";
import { useState } from "react";
import {
  Container,
  Grid,
  Item,
  Segment,
  Header,
  Divider
} from "semantic-ui-react";
import IfThereIsAnActiveUser from "../../components/Login/IfThereIsAnActiveUser";
import Login from "../../components/Login/Login";
import LastBlogsTab from "../BlogDetails/LastBlogsTab";
import PopularTab from "../BlogDetails/PopularTab";
import CommentsTab from "../BlogDetails/CommentsTab";
import { User, Blog } from "../../@types/types/DatabaseTypes";
import { useQuery } from "react-apollo";
import { GET_BLOGS_BY_CATEGORY } from "../../graphql/Blog/query";
import {
  Props,
  GetBlogsByCategoryReturnData,
  GetBlogsByCategoryVariables
} from "../../@types/interfaces/PageInterfaces/Categories/category.interfaces";
import Loading from "../../components/Loading/Loading";
import BlogItem from "./BlogItem";
import { isBrowser } from "../../lib/isBrowser";
import Pagination from "../../components/Pagination/Pagination";

const CategoryPage: React.FC<Props> = ({ session }) => {
  const [blogsPerPage, setBlogPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const category: string = isBrowser && window.location.pathname.split("/")[2];

  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  const { data, loading } = useQuery<
    GetBlogsByCategoryReturnData,
    GetBlogsByCategoryVariables
  >(GET_BLOGS_BY_CATEGORY, {
    variables: { category }
  });

  if (loading) return <Loading size={50} />;

  // totalBlogs
  const totalBlogs: Array<Blog> = data && data.getBlogByCategory;

  // get current blogs
  const indexOfLastBlog: number = currentPage * blogsPerPage;
  const indexOfFirstBlog: number = indexOfLastBlog - blogsPerPage;
  const currentBlogs: Array<Blog> = totalBlogs.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <Segment color="violet" className="blog-card">
            <Header as="h2" content={category.toUpperCase()} />
            <Divider />
            <Item.Group divided>
              {currentBlogs.map(blog => (
                <BlogItem blog={blog} />
              ))}
            </Item.Group>
            <Pagination
              totalBlogs={totalBlogs}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              blogsPerPage={blogsPerPage}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          {session && session.activeUser.user !== null ? (
            <IfThereIsAnActiveUser session={session} />
          ) : (
            <Login />
          )}
          <LastBlogsTab />
          <PopularTab />
          <CommentsTab activeUser={activeUser} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CategoryPage;
