import * as React from "react";
import Blog from "./Blog";
import TrendBlogs from "./TrendBlogs/TrendBlogs";
import LastBlogs from "./LastBlogs/LastBlogs";
import { Container } from "semantic-ui-react";

const Home: React.FC = () => (
  <Container>
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Blog />
      <TrendBlogs />
      <LastBlogs />
    </div>
  </Container>
);

export default Home;
