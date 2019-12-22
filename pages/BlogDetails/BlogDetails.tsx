import * as React from "react";
import { isBrowser } from "../../lib/isBrowser";
import { useQuery } from "react-apollo";
import { GET_BLOG_BY_ID } from "../../graphql/Blog/query";
import {
  GetBlogByIdReturnType,
  GetBlogByIdVariables,
  Props
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetails.interfaces";
import Loading from "../../components/Loading/Loading";
import Login from "../../components/Login/Login";
import { Container, Grid } from "semantic-ui-react";
import BlogDetailsCard from "./BlogDetailsCard";
import PopularTab from "./PopularTab";
import { Blog, User } from "../../@types/types/Blog";
import LastBlogsTab from "./LastBlogsTab";
import IfThereIsAnActiveUser from "../../components/Login/IfThereIsAnActiveUser";

const BlogDetails: React.FC<Props> = ({ session }) => {
  const blogId: string = isBrowser && window.location.pathname.split("/")[3];

  const { data: getBlogByIdData, loading: getBlogByIdLoading } = useQuery<
    GetBlogByIdReturnType,
    GetBlogByIdVariables
  >(GET_BLOG_BY_ID, { variables: { id: blogId } });

  if (getBlogByIdLoading) return <Loading size={50} />;

  const blog: Blog = getBlogByIdData.blog.blog;
  const user: User = getBlogByIdData.blog.blog.user;
  const comments: Array<Comment> = getBlogByIdData.blog.comments;

  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <BlogDetailsCard comments={comments} blog={blog} user={user} />
        </Grid.Column>
        <Grid.Column width={5}>
          {session && session.activeUser.user !== null ? (
            <IfThereIsAnActiveUser session={session} />
          ) : (
            <Login />
          )}
          <LastBlogsTab />
          <PopularTab />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BlogDetails;
