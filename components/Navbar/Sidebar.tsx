import * as React from "react";
import { Sidebar, Menu, Icon, Ref, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

type Props = {
  isVisible: boolean;
  setIsVisible: any;
};

const SidebarMenu: React.FC<Props> = ({ isVisible, setIsVisible }) => {
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
        style={{ fontSize: "15px" }}
        onClick={() => setIsVisible(false)}
      >
        X
      </Menu.Item>
      <Menu.Item className="home-nav-link">
        <NavLink onClick={() => setIsVisible(false)} to="/">
          Home
        </NavLink>
      </Menu.Item>
      <NavLink
        onClick={() => setIsVisible(false)}
        className="item"
        to="/signup"
      >
        <span>Sign Up</span>
      </NavLink>
      <NavLink onClick={() => setIsVisible(false)} className="item" to="/login">
        <span>Login</span>
      </NavLink>
    </Sidebar>
  );
};

export default SidebarMenu;
