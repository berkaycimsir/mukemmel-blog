import * as React from "react";
import {
  Feed as FeedType,
  User
} from "../../@types/types/database/DatabaseTypes";
import {
  Segment,
  Feed,
  Message,
  Header,
  Transition,
  Divider
} from "semantic-ui-react";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import LikeFeed from "../Social/LikeFeed";
import ReplyFeed from "../Social/ReplyFeed";
import DeleteFeed from "../Social/DeleteFeed";
import UpdateFeed from "../Social/UpdateFeed";
import { getRandomColor } from "../../utils/functions/getRandomSemanticColor";

type Props = {
  feeds: FeedType[];
  activeUser: User;
};

const UserFeeds: React.FC<Props> = ({ feeds, activeUser }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => setVisible(true);

  React.useEffect(() => toggleVisibility());

  return (
    <Segment color="violet" raised>
      {feeds.length !== 0 && (
        <>
          <Header
            content={`Bu kullanıcı ${feeds.length} feed paylaşmış!`}
            as="h4"
          />
          <Divider />
        </>
      )}
      {feeds.length === 0 && (
        <Message
          color="red"
          header="Bu kullanıcı hiç feed paylaşmamış!"
          content="Bu kullanıcı hiç feed paylaşmamış. İstiyorsan sen paylaşabilirsin!"
        />
      )}
      {feeds.map((feed: FeedType) => (
        <Transition visible={visible} animation="slide down" duration={500}>
          <Segment color={getRandomColor()} key={feed.id}>
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
      ))}
    </Segment>
  );
};

export default UserFeeds;
