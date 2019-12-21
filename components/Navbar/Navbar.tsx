import * as React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

type Props = {
  session: any;
};

const Navbar: React.FC<Props> = ({ session }) => {
  return (
    <Menu stackable className="navbar" size="small">
      {console.log(session)};
      <NavLink to="/">
        <Menu.Item>
          <Image
            size="mini"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfISJ80aijWwPIjStqGeNBeErlpkaY9Jyo3ykYycFn4h6UkbBf&s"
          />
        </Menu.Item>
      </NavLink>
      <Menu.Menu position="right">
        <NavLink className="item" to="/signup">
          <span>Sign Up</span>
        </NavLink>
        <NavLink className="item" to="/login">
          <span>Login</span>
        </NavLink>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
