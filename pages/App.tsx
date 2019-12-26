import * as React from "react";
import Head from "next/head";
import Home from "./Home/Home";
import "../utils/css/index.css";
import { Route, Switch } from "react-router-dom";
import SessionWrapperHOC from "../components/Hoc/SessionWrapperHOC";

// pages
import BlogDetails from "./BlogDetails/BlogDetails";
import LoginPage from "./Login/LoginPage";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Javascript from "./Categories/Software/Javascript/Javascript";

type Props = {
  session: any;
};

const App: React.FC<Props> = ({ session }) => (
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

    <Navbar session={session} />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route
        exact
        path="/blog/details/:id"
        render={() => <BlogDetails session={session} />}
      />
      <Route exact path="/profile" render={() => <Profile />} />
      <Route
        exact
        path="/software/category/javascript"
        render={() => <Javascript session={session} />}
      />
      <Route exact path="*" render={() => <div>No page.</div>} />
    </Switch>
    <Footer />
  </>
);

export default SessionWrapperHOC(App);
