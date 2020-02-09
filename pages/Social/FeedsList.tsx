import * as React from "react";
import {
  Feed,
  Image,
  Card,
  Segment,
  Message,
  Transition,
  Popup
} from "semantic-ui-react";
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
import ReplyFeed from "./ReplyFeed";
import {
  User,
  Feed as FeedType
} from "../../@types/types/database/DatabaseTypes";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import DeleteFeed from "./DeleteFeed";
import UpdateFeed from "./UpdateFeed";
import { getRandomColor } from "../../utils/functions/getRandomSemanticColor";

type Props = {
  activeUser: User;
};

const FeedList: React.FC<Props> = ({ activeUser }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => setVisible(true));

  const { data, loading } = useQuery<GetFeedsReturnData>(FEEDS);

  if (loading) return <Loading size={50} />;

  const feeds: FeedType[] = data.feeds.filter(
    (feed: FeedType) => feed.reply_id === "not a reply"
  );

  return (
    <>
      {feeds.length === 0 ? (
        <Message
          color="red"
          header="Burada hiç feed yok!"
          content="Eğer istersen hemen giriş yaparak ya da kayıt olarak düşüncelerini paylaşabilirsin!"
        />
      ) : (
        feeds.map(feed => (
          <Transition
            key={feed.id}
            visible={visible}
            animation="slide down"
            duration={500}
          >
            <Segment color={getRandomColor()}>
              <Feed size="small">
                <Feed.Event>
                  <Feed.Label image={getImageUrlByGender(feed.user.gender)} />
                  <Feed.Content>
                    <Feed.Summary className="blog-detail-content">
                      <a href={`/profile/${feed.user_id}`}>
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
                        <LikeFeed activeUser={activeUser} id={feed.id} />
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
                      {activeUser.id === feed.user_id && (
                        <Feed.Like>
                          <DeleteFeed id={feed.id} /> Sil
                        </Feed.Like>
                      )}
                      {activeUser.id === feed.user_id && (
                        <Feed.Like>
                          <UpdateFeed id={feed.id} /> Güncelle
                        </Feed.Like>
                      )}
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
          </Transition>
        ))
      )}
    </>
  );
};

export default FeedList;
