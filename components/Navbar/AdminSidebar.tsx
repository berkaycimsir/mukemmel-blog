import * as React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminSidebar: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth, setWindowWidth]);

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      width="thin"
      visible={isVisible}
    >
      <Menu.Item
        onClick={() => setIsVisible(false)}
        style={{ fontSize: "15px" }}
      >
        X
      </Menu.Item>
      <Menu.Item className="home-nav-link">
        <NavLink to="/">Anasayfa</NavLink>
      </Menu.Item>
      <NavLink className="item" to="/category/technology">
        <span>Teknoloji</span>
      </NavLink>
      <NavLink className="item" to="/about">
        <span>Hakkımızda</span>
      </NavLink>
    </Sidebar>
  );
};

export default AdminSidebar;
