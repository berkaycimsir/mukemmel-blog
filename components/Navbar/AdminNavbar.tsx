import * as React from "react";
import { Menu, Button, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminNavbar: React.FC<{} & RouteComponentProps> = ({ location }) => {
  const [activeItem, setActiveItem] = React.useState<string>("home");
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth, setWindowWidth]);

  return (
    <Menu fixed="top" size="huge" inverted>
      {windowWidth <= 766.9 && (
        <Button
          basic
          style={{ width: "40px" }}
          icon={
            <Image
              style={{ width: "30px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/200px-Hamburger_icon.svg.png"
            />
          }
          onClick={() => setIsVisible(true)}
        />
      )}
      <AdminSidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Menu.Menu position={windowWidth >= 766.9 ? "left" : "right"}>
        <a className="item" href="/">
          <span>Siteye Git</span>
        </a>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(AdminNavbar);
