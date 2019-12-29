import * as React from "react";
import { Menu, Button, Image, Dropdown } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import MenuIcon from "@material-ui/icons/Menu";
import { ArrowDropDown } from "@material-ui/icons";

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
        <a className="item" href="/">
          <span>Siteye Git</span>
        </a>
        {windowWidth >= 766.9 && (
          <>
            <NavLink to="/admin/get-started" className="item">
              <span>Başlangıç</span>
            </NavLink>
            <Dropdown
              closeOnEscape
              icon={<ArrowDropDown />}
              item
              simple
              text="Yazılar"
            >
              <Dropdown.Menu>
                <NavLink to="/admin/articles" className="dropdown item">
                  Tüm Yazılar
                </NavLink>
                <NavLink to="/admin/add-new-blog" className="dropdown item">
                  Yeni Ekle
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(AdminNavbar);
