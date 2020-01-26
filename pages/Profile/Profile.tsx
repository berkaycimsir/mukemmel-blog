import * as React from "react";
import { useQuery } from "react-apollo";
import {
  Props,
  GetUserByIdReturnData,
  GetUserByIdVariables
} from "../../@types/interfaces/PageInterfaces/Profile/profile.interfaces";
import { USER } from "../../graphql/User/query";
import Loading from "../../components/Loading/Loading";
import {
  Container,
  Segment,
  Header,
  Grid,
  Image,
  List,
  Menu,
  Divider,
  Button
} from "semantic-ui-react";
import { User, Feed, Comment } from "../../@types/types/database/DatabaseTypes";
import Moment from "react-moment";
import UserFeeds from "./UserFeeds";
import UserComments from "./UserComments";
import ProfileListItem from "./ProfileListItem";
import Logout from "../../components/Logout/Logout";
import UpdateUser from "./UpdateUser";

const Profile: React.FC<Props> = ({ session }) => {
  const [activeItem, setActiveItem] = React.useState<string>("feeds");
  const [updating, setUpdating] = React.useState<boolean>(false);

  const activeUser: User =
    session && session.activeUser.user !== null && session.activeUser.user;

  const { data, loading } = useQuery<
    GetUserByIdReturnData,
    GetUserByIdVariables
  >(USER, {
    variables: { id: window.location.pathname.split("/")[2] }
  });

  if (loading) return <Loading size={50} />;

  const user: User = data.user.user;
  const feeds: Feed[] = data.user.user.feeds;
  const comments: Comment[] = data.user.user.comments;

  return (
    <Container>
      <Segment color="violet" raised>
        <Header
          content={`${user.name} ${user.surname} Profili`}
          textAlign="center"
        />
        <Grid columns={3} stackable>
          <Grid.Column width={6}>
            <Image
              src="https://image.flaticon.com/icons/svg/17/17004.svg"
              centered
            />
          </Grid.Column>
          <Grid.Column width={10}>
            {updating ? (
              <UpdateUser id={user.id} setUpdating={setUpdating} />
            ) : (
              <List relaxed divided>
                <ProfileListItem
                  color="#EA7675"
                  header="İsim"
                  description={user.name}
                />
                <ProfileListItem
                  color="#F48840"
                  header="Soyisim"
                  description={user.surname}
                />
                <ProfileListItem
                  color="#B58105"
                  header="Kullanıcı Adı"
                  description={`@${user.username}`}
                />
                <ProfileListItem
                  color="#10a3a3"
                  header="Email"
                  description={user.email}
                />
                <ProfileListItem
                  color="#6435c9"
                  header="Cinsiyet"
                  description={user.gender === "men" ? "Erkek" : "Kadın"}
                />
                <ProfileListItem
                  color="#a5673f"
                  header="Oluşturulma Tarihi"
                  description={
                    <Moment date={user.createdAt} format="DD/MM/YY" />
                  }
                />
                {activeUser.id === user.id && (
                  <>
                    <List.Item>
                      <List.Description>
                        <Button
                          color="green"
                          inverted
                          content="Güncelle"
                          size="small"
                          onClick={() => setUpdating(true)}
                          fluid
                        />
                      </List.Description>
                    </List.Item>
                    <List.Item>
                      <List.Description>
                        <Logout />
                      </List.Description>
                    </List.Item>
                  </>
                )}
              </List>
            )}
          </Grid.Column>
          <Grid.Column width={16}>
            <Divider />
            <Menu pointing>
              <Menu.Item
                content="Feeds"
                active={activeItem === "feeds"}
                onClick={() => setActiveItem("feeds")}
              />
              <Menu.Item
                content="Yorumları"
                active={activeItem === "comments"}
                onClick={() => setActiveItem("comments")}
              />
            </Menu>
            {activeItem === "feeds" && (
              <UserFeeds feeds={feeds} activeUser={activeUser} />
            )}
            {activeItem === "comments" && (
              <UserComments
                activeUserDeleteComment={
                  activeUser.id === user.id ? true : false
                }
                comments={comments}
                activeUser={activeUser}
              />
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Profile;
