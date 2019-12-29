import * as React from "react";
import { Card, Feed, Header, Image } from "semantic-ui-react";
import { Add, ChatBubble, Description } from "@material-ui/icons";
import { useQuery } from "react-apollo";
import {
  GetBlogsReturnData,
  GetAllCommentsReturnData
} from "../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import { GET_COMMENTS } from "../../../graphql/Comment/query";
import Moment from "react-moment";
import { Blog, Comment, User } from "../../../@types/types/DatabaseTypes";
import { GetCommentsReturnData } from "../../../@types/interfaces/PageInterfaces/BlogDetails/allcommentstab.interfaces";
import { GET_LAST_USERS } from "../../../graphql/User/query";
import { GetUsersReturnData } from "../../../@types/interfaces/PageInterfaces/Admin/GetStarted/events.interfaces";

const Events: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  const { data: getCommentsData, loading: getCommentsLoading } = useQuery<
    GetCommentsReturnData
  >(GET_COMMENTS);

  const { data: getUsersData, loading: getUsersLoading } = useQuery<
    GetUsersReturnData
  >(GET_LAST_USERS);

  let slicedBlogs: Array<Blog>;

  if (!getBlogsLoading) slicedBlogs = getBlogsData.blogs.slice(0, 3);

  let slicedComments: Array<Comment>;

  if (!getCommentsLoading) {
    slicedComments = getCommentsData.comments.slice(0, 3);
  }

  let slicedUsers: Array<User>;

  if (!getUsersLoading) slicedUsers = getUsersData.users.slice(0, 3);

  const menGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
  ];

  const womenGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
  ];

  const getImageUrlByGender: Function = (gender: string): string => {
    return gender === "men" ? menGenderImageUrl[0] : womenGenderImageUrl[0];
  };

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Etkinlik</Card.Header>
      </Card.Content>
      {getBlogsLoading ? (
        <Loading size={30} />
      ) : (
        <Card.Content>
          <Feed>
            <Header as="h4" content="Son eklenen bloglar:" />
            {slicedBlogs.map((blog: Blog) => (
              <Feed.Event>
                <Feed.Label icon={<Description />} />
                <Feed.Content>
                  <Feed.Date>
                    <Moment date={blog.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>
                    <a href={`/blog/details/${blog.id}`}>{blog.title}</a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>

          <Feed>
            <Header as="h4" content="Son yapılan yorumlar:" />
            {slicedComments.map((comment: Comment) => (
              <Feed.Event>
                <Feed.Label>
                  <Image
                    size="mini"
                    src={getImageUrlByGender(comment.user.gender)}
                  />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>
                    {comment.user.name} {comment.user.surname} &nbsp;
                    <Moment date={comment.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>{comment.content}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>

          <Feed>
            <Header as="h4" content="Son kayıtlar:" />
            {slicedUsers.map((user: User) => (
              <Feed.Event>
                <Feed.Label>
                  <Image size="mini" src={getImageUrlByGender(user.gender)} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>
                    @{user.username} &nbsp;
                    <Moment date={user.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>
                    {user.name} {user.surname}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Card.Content>
      )}
    </Card>
  );
};

export default Events;
