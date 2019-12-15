import * as React from "react";
import { Container } from "semantic-ui-react";
import BlogList from "./BlogList";

const Blog: React.FC = () => {
  return (
    <>
      <Container style={{ width: "65%" }}>
        <BlogList />
      </Container>
    </>
  );
};

export default Blog;
