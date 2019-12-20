import * as React from "react";
import Head from "next/head";
import Home from "./Home/Home";
import "../utils/css/index.css";
import { Route, Switch } from "react-router-dom";
// pages
import BlogDetails from "./BlogDetails/BlogDetails";
import LoginPage from "./Login/LoginPage";
import SignUp from "./SignUp/SignUp";
// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route exact path="/blog/details/:id" render={() => <BlogDetails />} />
      <Route exact path="*" render={() => <div>No page.</div>} />
    </Switch>
    <Footer />
  </>
);

export default App;
