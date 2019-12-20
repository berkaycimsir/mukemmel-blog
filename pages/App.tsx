import * as React from "react";
import Head from "next/head";
import Home from "./Home/Home";
import "../utils/css/index.css";
import Navbar from "../components/Navbar/Navbar";
import { Container, Divider } from "semantic-ui-react";
import Footer from "../components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogDetails from "./BlogDetails/BlogDetails";

const App: React.FC = () => (
  <>
    <Head>
      <title>Berkay'ın Bloğu</title>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Navbar />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/blog/details/:id" render={() => <BlogDetails />} />
      <Route exact path="*" render={() => <div>No page.</div>} />
    </Switch>
    <Footer />
  </>
);

export default App;
