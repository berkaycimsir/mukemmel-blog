import * as React from "react";
import { Container, Grid } from "semantic-ui-react";
import IfThereIsAnActiveUser from "../../../../components/Login/IfThereIsAnActiveUser";
import Login from "../../../../components/Login/Login";
import LastBlogsTab from "../../../BlogDetails/LastBlogsTab";
import PopularTab from "../../../BlogDetails/PopularTab";
import CommentsTab from "../../../BlogDetails/CommentsTab";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Categories/Software/javascriptpage.interfaces";
import { User } from "../../../../@types/types/DatabaseTypes";

const Javascript: React.FC<Props> = ({ session }) => {
  const activeUser: User =
    session && session.activeUser.user !== null && session.activeUser.user;

  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>Javascript page</Grid.Column>
        <Grid.Column width={5}>
          {session && session.activeUser.user !== null ? (
            <IfThereIsAnActiveUser session={session} />
          ) : (
            <Login />
          )}
          <LastBlogsTab />
          <PopularTab />
          <CommentsTab activeUser={activeUser} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Javascript;
