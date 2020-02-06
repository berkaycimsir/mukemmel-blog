import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import Editor from "./UpdateBlogEditor";
import { Props } from "../../../../../@types/interfaces/PageInterfaces/Admin/Articles/UpdateBlog/updateblog.interfaces";
import { User } from "../../../../../@types/types/database/DatabaseTypes";
import Auth from "../../../../../components/Hoc/Auth";

const UpdateBlog: React.FC<Props> = ({ session }) => {
  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  return (
    <Segment basic padded>
      <Container fluid>
        <Editor activeUser={activeUser} />
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
})(UpdateBlog);
