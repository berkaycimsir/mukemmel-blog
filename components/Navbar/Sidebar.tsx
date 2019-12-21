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
        style={{ fontSize: "18px" }}
        as="a"
        onClick={() => setIsVisible(false)}
      >
        X
      </Menu.Item>
      <NavLink onClick={() => setIsVisible(false)} to="/">
        <Menu.Item>Home</Menu.Item>
      </NavLink>
      <Menu.Item onClick={() => setIsVisible(false)} as="a">
        Games
      </Menu.Item>
      <Menu.Item onClick={() => setIsVisible(false)} as="a">
        Channels
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarMenu;
