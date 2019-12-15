import * as React from "react";
import {
  Tab,
  Menu,
  Label,
  SemanticShorthandItem,
  TabPaneProps,
  Card,
  Divider
} from "semantic-ui-react";

const panes: {
  pane?: SemanticShorthandItem<TabPaneProps>;
  menuItem?: any;
  render?: () => React.ReactNode;
}[] = [
  {
    menuItem: { key: "users", icon: "users", content: "Users" },
    render: () => <Tab.Pane attached="top">Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached="top">Trend İçerikler</Tab.Pane>
  }
];

const TrendBlogs: React.FC = () => (
  <Card style={{ marginTop: "20px" }} fluid color="teal">
    <Card.Content>
      <Card.Header style={{ padding: "5px" }} className="blog-card-title">
        Trend İçerikler
      </Card.Header>
      <Divider />
      <Tab panes={panes} />
    </Card.Content>
  </Card>
);

export default TrendBlogs;
