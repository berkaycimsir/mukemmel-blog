import * as React from "react";
import { Feed, Image, Card, Segment } from "semantic-ui-react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";
import { useQuery } from "react-apollo";
import { GetFeedsReturnData } from "../../@types/interfaces/PageInterfaces/Feed/feedlist.interfaces";
import { FEEDS } from "../../graphql/Feed/query";
import Moment from "react-moment";
import Loading from "../../components/Loading/Loading";

const FeedList: React.FC = () => {
  const { data, loading } = useQuery<GetFeedsReturnData>(FEEDS);

  if (loading) return <Loading size={50} />;

  return (
    <>
      {!loading &&
        data.feeds.map(feed => (
          <Segment key={feed.id} raised style={{ padding: "15px" }}>
            <Feed size="large">
              <Feed.Event>
                <Feed.Label image={getImageUrlByGender("men")} />
                <Feed.Content>
                  <Feed.Summary className="blog-detail-content">
                    <a>Berkay Çimşir</a> posted on his page
                    <Feed.Date>
                      <Moment date={feed.createdAt} fromNow ago /> ago
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra className="blog-detail-content">
                    {feed.content}
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Image
                        children={
                          <FavoriteBorder htmlColor="red" fontSize="small" />
                        }
                      />
                      <span style={{ marginLeft: "2px" }}>
                        {feed.likes} Likes
                      </span>
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
        ))}
    </>
  );
};

export default FeedList;
