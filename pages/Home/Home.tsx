import * as React from "react";
import Blog from "./Blog";
import TrendBlogs from "./TrendBlogs/TrendBlogs";
import LastBlogs from "./LastBlogs/LastBlogs";
import { Container, Grid, Segment, Header, Divider } from "semantic-ui-react";
import CategoryBlogs from "./LastBlogs/CategoryBlogs";
import LastFeeds from "../BlogDetails/LastFeeds";
import { User } from "../../@types/types/database/DatabaseTypes";
import CommentsTab from "../BlogDetails/CommentsTab";
import CommentsTabPart from "../BlogDetails/CommentsTabPart";

type Props = {
  activeUser: User;
};

const Home: React.FC<Props> = ({ activeUser }) => (
  <Container>
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Blog />
      <Divider />
      <TrendBlogs />
      <Divider />
      <LastBlogs />
      <Divider />
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment color="violet">
            <Header content="Javascript" as="h2" />
            <Divider />
            <CategoryBlogs category="javascript" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color="blue">
            <Header content="Teknoloji" as="h2" />
            <Divider />
            <CategoryBlogs category="technology" />
          </Segment>
        </Grid.Column>
      </Grid>
      <Divider />
      <Segment color="orange">
        <Header as="h3" content="Son paylaşılan feedler!" />
        <Divider />
        <LastFeeds activeUser={activeUser} userImage={true} />
      </Segment>
      <Divider />
      <Segment color="green">
        <Header content="Son yapılan yorumlar!" />
        <Divider />
        <CommentsTabPart isDivided={false} activeUser={activeUser} />
      </Segment>
    </div>
  </Container>
);

export default Home;
