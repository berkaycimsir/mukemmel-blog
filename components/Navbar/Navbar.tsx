import * as React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./Sidebar";

type Props = {
  session: any;
};

const Navbar: React.FC<Props> = ({ session }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState<number>(
    window.innerWidth
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  return (
    <Menu stackable className="navbar" size="small">
      {console.log(session)}
      <Menu.Item>
        {windowWidth <= 766.9 ? (
          <>
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
            <SidebarMenu
              activeUser={
                session &&
                session.activeUser !== null &&
                session.activeUser.user
              }
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </>
        ) : (
          <NavLink to="/">
            <Image
              size="mini"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfISJ80aijWwPIjStqGeNBeErlpkaY9Jyo3ykYycFn4h6UkbBf&s"
            />
          </NavLink>
        )}
      </Menu.Item>

      <Menu.Menu position="right">
        {session && session.activeUser.user !== null ? (
          <NavLink className="item" to="/profile">
            <span>Profile</span>
          </NavLink>
        ) : (
          windowWidth > 767 && (
            <>
              <NavLink className="item" to="/signup">
                <span>Sign Up</span>
              </NavLink>
              <NavLink className="item" to="/login">
                <span>Login</span>
              </NavLink>
            </>
          )
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
