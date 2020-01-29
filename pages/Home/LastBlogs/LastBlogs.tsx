import * as React from "react";
import { Card, Divider, Menu } from "semantic-ui-react";
import AllLastBlogs from "./AllLastBlogs";
import CategoryBlogs from "./CategoryBlogs";
import CategoryDropdown from "./CategoryDropdown";

const LastBlogs: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>("all");
  const [windowWidth, setWindowWidth] = React.useState<number>(
    window.innerWidth
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth, setWindowWidth]);

  return (
    <Card style={{ marginTop: "20px" }} fluid color="teal">
      <Card.Content>
        <Card.Header style={{ marginTop: "3px" }}>Son İçerikler</Card.Header>
        <Divider />
        <Menu pointing>
          <Menu.Item
            content="Tümü"
            active={activeItem === "all"}
            onClick={() => setActiveItem("all")}
          />
          <Menu.Item
            content="Javascript"
            active={activeItem === "javascript"}
            onClick={() => setActiveItem("javascript")}
          />
          {windowWidth > 766.9 ? (
            <>
              <Menu.Item
                content="Php"
                active={activeItem === "php"}
                onClick={() => setActiveItem("php")}
              />
              <Menu.Item
                content="Python"
                active={activeItem === "python"}
                onClick={() => setActiveItem("python")}
              />
              <Menu.Item
                content="Html"
                active={activeItem === "html"}
                onClick={() => setActiveItem("html")}
              />
              <Menu.Item
                content="C#"
                active={activeItem === "csharp"}
                onClick={() => setActiveItem("csharp")}
              />
              <Menu.Item
                content="Teknoloji"
                active={activeItem === "technology"}
                onClick={() => setActiveItem("technology")}
              />
            </>
          ) : (
            <Menu.Menu position="right">
              <CategoryDropdown
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </Menu.Menu>
          )}
        </Menu>

        {activeItem === "all" ? (
          <AllLastBlogs />
        ) : (
          <CategoryBlogs category={activeItem} />
        )}
      </Card.Content>
    </Card>
  );
};

export default LastBlogs;
