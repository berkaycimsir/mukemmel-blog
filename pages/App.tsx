import * as React from "react";
import Head from "next/head";
import Home from "./Home/Home";
import "../utils/css/index.css";
import Navbar from "../components/Navbar/Navbar";
import { Container, Divider } from "semantic-ui-react";
import Footer from "../components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogDetails from "./BlogDetails/BlogDetails";

const Root: React.FC = () => (
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
      <Route
        exact
        path="/"
        render={() => (
          <Container>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Home />
            </div>
          </Container>
        )}
      />
      <Route exact path="/blog" render={() => <BlogDetails />} />
    </Switch>
    <Footer />
  </>
);

const App: React.FC = () => <Root />;

export default App;
