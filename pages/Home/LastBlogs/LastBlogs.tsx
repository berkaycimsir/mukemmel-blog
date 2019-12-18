import * as React from "react";
import {
  Tab,
  SemanticShorthandItem,
  TabPaneProps,
  Card,
  Divider
} from "semantic-ui-react";
import AllLastBlogs from "./AllLastBlogs";

const panes: {
  pane?: SemanticShorthandItem<TabPaneProps>;
  menuItem?: any;
  render?: () => React.ReactNode;
}[] = [
  {
    menuItem: { key: "all-trend-blogs", content: "Tümü" },
    render: () => <AllLastBlogs />
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached="top">Trend İçerikler</Tab.Pane>
  }
];

const LastBlogs: React.FC = () => (
  <Card style={{ marginTop: "20px" }} fluid color="teal">
    <Card.Content>
      <Card.Header style={{ marginTop: "3px" }}>Son İçerikler</Card.Header>
      <Divider />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Card.Content>
  </Card>
);

export default LastBlogs;
