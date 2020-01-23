import * as React from "react";
import { useQuery } from "react-apollo";
import {
  GetFeedByIdReturnData,
  GetFeedByIdVariables
} from "../../@types/interfaces/PageInterfaces/Feed/replyfeed.interfaces";
import { FEED } from "../../graphql/Feed/query";
import Loading from "../../components/Loading/Loading";
import { Segment, Feed, Container, Header } from "semantic-ui-react";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";
import Moment from "react-moment";
import LikeFeed from "./LikeFeed";
import ReplyFeed from "./ReplyFeed";
import { Redirect } from "react-router";
import {
  Feed as FeedType,
  User
} from "../../@types/types/database/DatabaseTypes";
import { NavLink } from "react-router-dom";

type Props = {
  session: any;
};

const FeedDetail: React.FC<Props> = ({ session }) => {
  const activeUser: User =
    session && session.activeUser.user !== null && session.activeUser.user;

  const { data, loading: getFeedLoading } = useQuery<
    GetFeedByIdReturnData,
    GetFeedByIdVariables
  >(FEED, { variables: { id: window.location.pathname.split("/")[4] } });

  if (getFeedLoading) return <Loading size={60} />;

  const feed: FeedType = data.feed.feed;
  const replies: FeedType[] = data.feed.feed.replies;

  return (
    <Container>
      <Segment>
        <Segment>
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
                  {feed.blog !== null && (
                    <NavLink to={`/blog/details/${feed.blog.id}`}>
                      ({feed.blog.title}'dan bahsederek)
                    </NavLink>
                  )}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <LikeFeed id={feed.id} />
                    <span style={{ marginLeft: "2px" }}>
                      {feed.likes} Beğeni
                    </span>
                  </Feed.Like>
                  <Feed.Like>
                    <ReplyFeed reply_id={feed.id} activeUser={activeUser} />
                    <span style={{ marginLeft: "2px" }}>
                      {feed.replies.length} Yanıt
                    </span>
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
        {replies.map(feed => (
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
                      <ReplyFeed reply_id={feed.id} activeUser={activeUser} />
                      <span style={{ marginLeft: "2px" }}>
                        {feed.replies.length} Yanıt
                      </span>
                    </Feed.Like>
                    <Feed.Like>
                      <a href={`/social/feed/details/${feed.id}`}>
                        Bu konuyu göster
                      </a>
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Segment>
        ))}
      </Segment>
    </Container>
  );
};

export default FeedDetail;
