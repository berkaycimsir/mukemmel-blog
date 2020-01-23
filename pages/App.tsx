import * as React from "react";
import Home from "./Home/Home";
import "../utils/css/index.css";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import SessionWrapperHOC from "../components/Hoc/SessionWrapperHOC";

// pages
import BlogDetails from "./BlogDetails/BlogDetails";
import LoginPage from "./Login/LoginPage";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import CategoryPage from "./Categories/CategoryPage";
import Admin from "./Admin/Admin";
import About from "./About/About";
import Blogs from "./Admin/Articles/AllBlogs/Blogs";
import AddBlog from "./Admin/Articles/AddBlog/AddBlog";
import UpdateBlog from "./Admin/Articles/AllBlogs/UpdateBlog/UpdateBlog";
import Social from "./Social/Social";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import Meta from "../components/Meta/Meta";
import FeedDetail from "./Social/FeedDetail";

type Props = {
  session: any;
};

const App: React.FC<Props & RouteComponentProps> = ({ session, location }) => {
  return (
    <>
      <Meta />

      {location.pathname.includes("/admin") && <AdminNavbar />}
      {!location.pathname.includes("/admin") && <Navbar session={session} />}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route
          exact
          path="/blog/details/:id"
          render={() => <BlogDetails session={session} />}
        />
        <Route exact path="/profile/:id" render={() => <Profile />} />
        <Route exact path="/about" render={() => <About />} />
        <Route
          exact
          path="/category/:category"
          render={() => <CategoryPage session={session} />}
        />
        <Route
          exact
          path="/social"
          render={() => <Social session={session} />}
        />
        <Route
          exact
          path="/social/feed/details/:id"
          render={() => <FeedDetail session={session} />}
        />
        <Route exact path="/admin/get-started" render={() => <Admin />} />
        <Route exact path="/admin/articles" render={() => <Blogs />} />
        <Route
          exact
          path="/admin/add-new-blog"
          render={() => <AddBlog session={session} />}
        />
        <Route
          exact
          path="/admin/update-blog/:id"
          render={() => <UpdateBlog session={session} />}
        />
        <Route exact path="*" render={() => <div>No page.</div>} />
      </Switch>
      {!location.pathname.includes("/admin") && <Footer />}
    </>
  );
};

export default withRouter(SessionWrapperHOC(App));
