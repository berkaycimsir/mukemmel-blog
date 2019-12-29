import * as React from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import MenuIcon from "@material-ui/icons/Menu";

const AdminNavbar: React.FC<{} & RouteComponentProps> = ({ location }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth, setWindowWidth]);

  return (
    <Menu className="navbar" size="large" inverted>
      {windowWidth <= 766.9 && (
        <Menu.Item onClick={() => setIsVisible(true)} icon={<MenuIcon />} />
      )}
      {windowWidth <= 767 && (
        <AdminSidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
      <Menu.Menu position={windowWidth >= 766.9 ? "left" : "right"}>
        <NavLink to="/admin/get-started" className="item">
          <span>Başlangıç</span>
        </NavLink>
        <a className="item" href="/">
          <span>Siteye Git</span>
        </a>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(AdminNavbar);
