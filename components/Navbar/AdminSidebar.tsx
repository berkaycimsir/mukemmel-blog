import * as React from "react";
import { Sidebar, Menu, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowDropDown } from "@material-ui/icons";

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminSidebar: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  const [visible, setVisible] = useState<boolean>(false);
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
      <NavLink
        onClick={() => setIsVisible(false)}
        className="item"
        to="/admin/get-started"
      >
        <span>Başlangıç</span>
      </NavLink>
      <Menu.Item
        content="Yazılar"
        icon={<ArrowDropDown htmlColor="white" />}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisible(false);
            }}
            to="/admin/articles"
            className="dropdown item"
          >
            Tüm Yazılar
          </NavLink>
          <NavLink
            onClick={() => {
              setIsVisible(false);
              setVisible(false);
            }}
            to="/admin/add-new-blog"
            className="dropdown item"
          >
            Yeni Ekle
          </NavLink>
        </>
      )}
    </Sidebar>
  );
};

export default AdminSidebar;
