import * as React from "react";
import { Menu } from "semantic-ui-react";

const AdminNavbar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>("home");

  return (
    <Menu fixed="top" size="small" inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={() => setActiveItem("messages")}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={() => setActiveItem("friends")}
      />
    </Menu>
  );
};

export default AdminNavbar;
