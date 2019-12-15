import * as React from "react";
import Blog from "./Blog";
import TrendBlogs from "./TrendBlogs/TrendBlogs";

const Home: React.FC = () => (
  <>
    <Blog />
    <TrendBlogs />
  </>
);

export default Home;
