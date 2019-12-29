import * as React from "react";
import { Card, Feed } from "semantic-ui-react";
import { Create } from "@material-ui/icons";
import { useQuery } from "react-apollo";
import { GetBlogsReturnData } from "../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../graphql/Blog/query";
import Loading from "../../../components/Loading/Loading";

const Statistics: React.FC = () => {
  const { data, loading } = useQuery<GetBlogsReturnData>(GET_BLOGS);

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Bir Bakışta</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Create />
            </Feed.Label>
            <Feed.Content>
              {loading ? (
                <Loading size={10} />
              ) : (
                <>
                  <Feed.Date>{data.blogs.length + " yazı"}</Feed.Date>
                  <Feed.Summary
                    content={`Şu ana kadar blogunda ${data.blogs.length} yazı yazılmış.`}
                  />
                </>
              )}
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="/images/avatar/small/molly.png" />
            <Feed.Content>
              <Feed.Date content="3 days ago" />
              <Feed.Summary>
                You added <a>Molly Malone</a> as a friend.
              </Feed.Summary>
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
    </Card>
  );
};

export default Statistics;
