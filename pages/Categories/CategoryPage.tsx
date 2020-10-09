import * as React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Item,
  Segment,
  Header,
  Divider,
} from "semantic-ui-react";
import IfThereIsAnActiveUser from "../../components/Login/IfThereIsAnActiveUser";
import Login from "../../components/Login/Login";
import LastBlogsTab from "../BlogDetails/LastBlogsTab";
import PopularTab from "../BlogDetails/PopularTab";
import CommentsTab from "../BlogDetails/CommentsTab";
import { User, Blog } from "../../@types/types/database/DatabaseTypes";
import { useQuery } from "react-apollo";
import { GET_BLOGS_BY_CATEGORY } from "../../graphql/Blog/query";
import {
  Props,
  GetBlogsByCategoryReturnData,
  GetBlogsByCategoryVariables,
} from "../../@types/interfaces/PageInterfaces/Categories/category.interfaces";
import Loading from "../../components/Loading/Loading";
import BlogItem from "./BlogItem";
import { isBrowser } from "../../lib/isBrowser";
import Pagination from "../../components/Pagination/Pagination";
import IfNoBlog from "./IfNoBlog";
import LastFeeds from "../BlogDetails/LastFeeds";
import LastFeedsTab from "../BlogDetails/LastFeedsTab";

const CategoryPage: React.FC<Props> = ({ session }) => {
  const [blogsPerPage, setBlogPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  const category: string = isBrowser && window.location.pathname.split("/")[2];

  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  const { data, loading } = useQuery<
    GetBlogsByCategoryReturnData,
    GetBlogsByCategoryVariables
  >(GET_BLOGS_BY_CATEGORY, {
    variables: { category },
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
          <Segment.Group>
            <Segment
              style={{
                minHeight: windowWidth > 766 && "2092.56px",
                boxShadow:
                  "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.24) !important",
              }}
              color="violet"
            >
              <Header as="h2" content={category.toUpperCase()} />
              <Divider />
              {!totalBlogs ||
              totalBlogs === undefined ||
              totalBlogs.length === 0 ? (
                <IfNoBlog />
              ) : (
                <Item.Group divided>
                  {currentBlogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                  ))}
                </Item.Group>
              )}
            </Segment>
            {(!totalBlogs ||
              totalBlogs === undefined ||
              totalBlogs.length === 0) && (
              <Segment>
                <Pagination
                  totalItems={totalBlogs}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  itemsPerPage={blogsPerPage}
                />
              </Segment>
            )}
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={5}>
          <div style={{ position: "sticky", top: 10 }}>
            {session && session.activeUser.user !== null ? (
              <IfThereIsAnActiveUser session={session} />
            ) : (
              <Login />
            )}
            <LastBlogsTab />
            <PopularTab />
            <CommentsTab activeUser={activeUser} />
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CategoryPage;
