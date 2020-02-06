import * as React from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";
import AllBlogs from "./AllBlogs";
import Auth from "../../../../components/Hoc/Auth";
import { User } from "../../../../@types/types/database/DatabaseTypes";

const Blogs: React.FC = () => {
  return (
    <Segment style={{ padding: "20px" }} basic>
      <Container fluid>
        <Header as="h2" content="Yazılar" />
        <Divider />
        <AllBlogs />
      </Container>
    </Segment>
  );
};

export default Auth((session: any) => {
  let activeUser: User = null;

  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  return activeUser !== null ? activeUser.admin === true : false;
})(Blogs);
