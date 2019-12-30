import * as React from "react";
import { Container, Segment } from "semantic-ui-react";
import Editor from "./Editor";

const AddBlog: React.FC = () => {
  return (
    <Segment basic padded>
      <Container fluid>
        <Editor />
      </Container>
    </Segment>
  );
};

export default AddBlog;
