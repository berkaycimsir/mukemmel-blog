import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import AddBlogEditor from "./AddBlogEditor";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/AddBlog/addblog.interfaces";
import { User } from "../../../../@types/types/database/DatabaseTypes";

const AddBlog: React.FC<Props> = ({ session }) => {
  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  return (
    <Segment basic padded>
      <Container fluid>
        <AddBlogEditor activeUser={activeUser} />
      </Container>
    </Segment>
  );
};

export default AddBlog;
