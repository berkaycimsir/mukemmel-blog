import * as React from "react";
import { Sidebar, Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { User } from "../../@types/types/database/DatabaseTypes";
import { useState } from "react";
import { ArrowDropDown } from "@material-ui/icons";

type Props = {
  isVisible: boolean;
  setIsVisible: any;
  activeUser: User;
};

const SidebarMenu: React.FC<Props> = ({
  activeUser,
  isVisible,
  setIsVisible
}) => {
  const [visibleSoftware, setVisibleSoftware] = useState<boolean>(false);
  const [visibleCategories, setVisibleCategories] = useState<boolean>(false);

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
          Anasayfa
        </NavLink>
      </Menu.Item>
      <NavLink
        onClick={() => setIsVisible(false)}
        className="item"
        to="/category/technology"
      >
        <span>Teknoloji</span>
      </NavLink>
      <NavLink onClick={() => setIsVisible(false)} className="item" to="/about">
        <span>Hakkımızda</span>
      </NavLink>
      <NavLink
        onClick={() => setIsVisible(false)}
        className="item"
        to="/contact"
      >
        <span>İletişim</span>
      </NavLink>
      <Menu.Item
        content="Yazılım"
        icon={<Image children={<ArrowDropDown htmlColor="white" />} />}
        onClick={() => {
          setVisibleSoftware(!visibleSoftware);
          setVisibleCategories(false);
        }}
      ></Menu.Item>
      {visibleSoftware && (
        <>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleSoftware(false);
              setVisibleCategories(false);
            }}
            to="/category/php"
            className="dropdown item"
          >
            PHP
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleSoftware(false);
              setVisibleCategories(false);
            }}
            to="/category/javascript"
            className="dropdown item"
          >
            Javascript
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleSoftware(false);
              setVisibleCategories(false);
            }}
            to="/category/python"
            className="dropdown item"
          >
            Python
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleSoftware(false);
              setVisibleCategories(false);
            }}
            to="/category/csharp"
            className="dropdown item"
          >
            C#
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleSoftware(false);
              setVisibleCategories(false);
            }}
            to="/category/html"
            className="dropdown item"
          >
            HTML
          </NavLink>
        </>
      )}
      <Menu.Item
        content="Kategoriler"
        icon={<Image children={<ArrowDropDown htmlColor="white" />} />}
        onClick={() => {
          setVisibleCategories(!visibleCategories);
          setVisibleSoftware(false);
        }}
      ></Menu.Item>
      {visibleCategories && (
        <>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleCategories(false);
              setVisibleSoftware(false);
            }}
            to="/category/game"
            className="dropdown item"
          >
            Oyun
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleCategories(false);
              setVisibleSoftware(false);
            }}
            to="/category/ai"
            className="dropdown item"
          >
            Yapay Zeka
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleCategories(false);
              setVisibleSoftware(false);
            }}
            to="/category/science"
            className="dropdown item"
          >
            Bilim
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisibleCategories(false);
              setVisibleSoftware(false);
            }}
            to="/category/mobile"
            className="dropdown item"
          >
            Mobil
          </NavLink>
        </>
      )}
      {activeUser ? (
        <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}>
          {activeUser.admin === true && (
            <a
              onClick={() => setIsVisible(false)}
              className="item"
              href="/admin/get-started"
            >
              <span>Admin Paneli</span>
            </a>
          )}
          <NavLink
            onClick={() => setIsVisible(false)}
            className="item"
            to="/profile"
          >
            <span>Profile</span>
          </NavLink>
        </div>
      ) : (
        <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}>
          <NavLink
            onClick={() => setIsVisible(false)}
            className="item"
            to="/signup"
          >
            <span>Kayıt Ol</span>
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(false)}
            className="item"
            to="/login"
          >
            <span>Giriş Yap</span>
          </NavLink>
        </div>
      )}
    </Sidebar>
  );
};

export default SidebarMenu;
