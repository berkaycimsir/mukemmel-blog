import * as React from "react";
import { useState } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <Menu stackable className="navbar" size="small">
      <Menu.Item>
        <Image
          size="mini"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfISJ80aijWwPIjStqGeNBeErlpkaY9Jyo3ykYycFn4h6UkbBf&s"
        />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="sign up"
          active={activeItem === "sign up"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
