import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import Editor from "../../../../components/Editor/Editor";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/updateblog.interfaces";
import { User } from "../../../../@types/types/database/DatabaseTypes";

const UpdateBlog: React.FC<Props> = ({ session }) => {
  let activeUser: User;
  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  return (
    <Segment basic padded>
      <Container fluid>
        <Editor isUpdating={true} activeUser={activeUser} />
      </Container>
    </Segment>
  );
};

export default UpdateBlog;
