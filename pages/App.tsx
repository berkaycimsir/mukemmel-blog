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
import Prism from "prismjs";

// pages
import BlogDetails from "./BlogDetails/BlogDetails";
import LoginPage from "./Login/LoginPage";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import CategoryPage from "./Categories/CategoryPage";
import Admin from "./Admin/Admin";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import Blogs from "./Admin/Articles/AllBlogs/Blogs";
import AddBlog from "./Admin/Articles/AddBlog/AddBlog";
import Meta from "../components/Meta/Meta";
import UpdateBlog from "./Admin/Articles/AllBlogs/UpdateBlog/UpdateBlog";

type Props = {
  session: any;
};

const App: React.FC<Props & RouteComponentProps> = ({ session, location }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  });

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
        <Route exact path="/profile" render={() => <Profile />} />
        <Route
          exact
          path="/category/:category"
          render={() => <CategoryPage session={session} />}
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
