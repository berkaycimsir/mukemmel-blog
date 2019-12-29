import * as React from "react";
import { Card, Feed, Header } from "semantic-ui-react";
import { Create, ChatBubble, FileCopy, Add } from "@material-ui/icons";
import { useQuery } from "react-apollo";
import {
  GetBlogsReturnData,
  GetAllCommentsReturnData
} from "../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import { GET_ALL_COMMENTS } from "../../../graphql/Comment/query";
import Moment from "react-moment";
import { Blog } from "../../../@types/types/DatabaseTypes";

const Events: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  let slicedBlogs: Array<Blog>;

  if (!getBlogsLoading) slicedBlogs = getBlogsData.blogs.slice(0, 3);

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
                <Feed.Label icon={<Add />} />
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
        </Card.Content>
      )}
    </Card>
  );
};

export default Events;
