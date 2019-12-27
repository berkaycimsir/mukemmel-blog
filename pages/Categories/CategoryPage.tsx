import * as React from "react";
import {
  Container,
  Grid,
  Item,
  Segment,
  Header,
  Divider,
  Pagination
} from "semantic-ui-react";
import IfThereIsAnActiveUser from "../../components/Login/IfThereIsAnActiveUser";
import Login from "../../components/Login/Login";
import LastBlogsTab from "../BlogDetails/LastBlogsTab";
import PopularTab from "../BlogDetails/PopularTab";
import CommentsTab from "../BlogDetails/CommentsTab";
import { User } from "../../@types/types/DatabaseTypes";
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

const CategoryPage: React.FC<Props> = ({ session }) => {
  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  const category: string = isBrowser && window.location.pathname.split("/")[2];

  const { data, loading } = useQuery<
    GetBlogsByCategoryReturnData,
    GetBlogsByCategoryVariables
  >(GET_BLOGS_BY_CATEGORY, {
    variables: { category }
  });

  if (loading) return <Loading size={50} />;

  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <Segment color="violet" className="blog-card">
            <Header as="h2" content={category.toUpperCase()} />
            <Divider />
            <Item.Group divided>
              {data &&
                data.getBlogByCategory.map(blog => <BlogItem blog={blog} />)}
            </Item.Group>
            <Pagination
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={10}
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
