import * as React from "react";
import { Card, Feed } from "semantic-ui-react";
import { Create, ChatBubble } from "@material-ui/icons";
import { useQuery } from "react-apollo";
import {
  GetBlogsReturnData,
  GetAllCommentsReturnData
} from "../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";
import { GET_ALL_COMMENTS } from "../../../graphql/Comment/query";

const Statistics: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  const { data: getCommentsData, loading: getCommentsLoading } = useQuery<
    GetAllCommentsReturnData
  >(GET_ALL_COMMENTS);

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Bir Bakışta</Card.Header>
      </Card.Content>
      {getCommentsLoading || getBlogsLoading ? (
        <Loading size={30} />
      ) : (
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label icon={<Create />} />
              <Feed.Content>
                <Feed.Date>{getBlogsData.blogs.length + " yazı"}</Feed.Date>
                <Feed.Summary
                  content={`Şu ana kadar blogunda ${getBlogsData.blogs.length} yazı yazılmış.`}
                />
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label icon={<ChatBubble />} />
              <Feed.Content>
                <Feed.Date>
                  {getCommentsData.comments.length + " yorum"}
                </Feed.Date>
                <Feed.Summary
                  content={`Şu ana kadar blog yazılarına ${getCommentsData.comments.length} yorum yapılmış.`}
                />
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/images/avatar/small/elliot.jpg" />
              <Feed.Content>
                <Feed.Date content="4 days ago" />
                <Feed.Summary>
                  You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      )}
    </Card>
  );
};

export default Statistics;
