import * as React from "react";
import { Menu, Image, Button, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./Sidebar";
import { ArrowDropDown } from "@material-ui/icons";

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

      {windowWidth > 767 && (
        <Menu.Menu position="left">
          <NavLink style={{ background: "#fff" }} className="item" to="/">
            <span>Anasayfa</span>
          </NavLink>
          <NavLink className="item" to="/blog/category/technology">
            <span>Teknoloji</span>
          </NavLink>
          <Dropdown
            closeOnEscape
            icon={<ArrowDropDown />}
            item
            simple
            text="Yazılım"
          >
            <Dropdown.Menu>
              <NavLink to="/software/category/php" className="dropdown item">
                PHP
              </NavLink>
              <NavLink
                to="/software/category/javascript"
                className="dropdown item"
              >
                Javascript
              </NavLink>
              <NavLink to="/software/category/Python" className="dropdown item">
                Python
              </NavLink>
              <NavLink to="/software/category/c#" className="dropdown item">
                C#
              </NavLink>
              <NavLink to="/software/category/html" className="dropdown item">
                HTML
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink className="item" to="/about">
            <span>Hakkımızda</span>
          </NavLink>
          <NavLink className="item" to="/contact">
            <span>İletişim</span>
          </NavLink>
        </Menu.Menu>
      )}

      <Menu.Menu position="right">
        {session && session.activeUser.user !== null ? (
          <NavLink className="item" to="/profile">
            <span>Profile</span>
          </NavLink>
        ) : (
          windowWidth > 767 && (
            <>
              <NavLink className="item" to="/signup">
                <span>Kayıt Ol</span>
              </NavLink>
              <NavLink className="item" to="/login">
                <span>Giriş Yap</span>
              </NavLink>
            </>
          )
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
