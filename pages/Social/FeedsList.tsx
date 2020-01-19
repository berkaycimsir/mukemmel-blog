import * as React from "react";
import { Feed, Image, Card, Segment } from "semantic-ui-react";
import {
  Favorite,
  FavoriteBorder,
  CommentOutlined,
  ChatBubbleOutline
} from "@material-ui/icons";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";
import { useQuery } from "react-apollo";
import { GetFeedsReturnData } from "../../@types/interfaces/PageInterfaces/Feed/feedlist.interfaces";
import { FEEDS } from "../../graphql/Feed/query";
import Moment from "react-moment";
import Loading from "../../components/Loading/Loading";
import LikeFeed from "./LikeFeed";

const FeedList: React.FC = () => {
  const { data, loading } = useQuery<GetFeedsReturnData>(FEEDS);

  if (loading) return <Loading size={50} />;

  return (
    <>
      {!loading &&
        data.feeds.map(feed => (
          <Segment key={feed.id}>
            <Feed size="small">
              <Feed.Event>
                <Feed.Label image={getImageUrlByGender(feed.user.gender)} />
                <Feed.Content>
                  <Feed.Summary className="blog-detail-content">
                    <a>
                      {feed.user.name} {feed.user.surname}
                    </a>{" "}
                    <Feed.Date>
                      <b>@{feed.user.username}</b>{" "}
                      <Moment date={feed.createdAt} fromNow ago /> ago
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra className="blog-detail-content">
                    {feed.content}
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <LikeFeed id={feed.id} />
                      <span style={{ marginLeft: "2px" }}>
                        {feed.likes} Beğeni
                      </span>
                    </Feed.Like>
                    <Feed.Like>
                      <ChatBubbleOutline />
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
