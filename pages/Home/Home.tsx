import * as React from "react";
import Blog from "./Blog";
import TrendBlogs from "./TrendBlogs/TrendBlogs";
import LastBlogs from "./LastBlogs/LastBlogs";

const Home: React.FC = () => (
  <>
    <Blog />
    <TrendBlogs />
    <LastBlogs />
  </>
);

export default Home;
