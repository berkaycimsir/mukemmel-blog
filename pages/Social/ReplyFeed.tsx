import * as React from "react";
import {
  Modal,
  Header,
  Image,
  Form,
  Button,
  Segment,
  Feed
} from "semantic-ui-react";
import { ChatBubbleOutline } from "@material-ui/icons";
import { REPLY_FEED } from "../../graphql/Feed/mutation";
import { useMutation, useQuery } from "react-apollo";
import {
  ReplyFeedReturnData,
  ReplyFeedVariables,
  Props,
  GetFeedByIdReturnData,
  GetFeedByIdVariables
} from "../../@types/interfaces/PageInterfaces/Feed/replyfeed.interfaces";
import { FEED, FEEDS } from "../../graphql/Feed/query";
import Loading from "../../components/Loading/Loading";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";
import Moment from "react-moment";
import { Feed as FeedType } from "../../@types/types/database/DatabaseTypes";

const ReplyFeed: React.FC<Props> = ({ activeUser, reply_id }) => {
  const [content, setContent] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const [addFeed, { loading }] = useMutation<
    ReplyFeedReturnData,
    ReplyFeedVariables
  >(REPLY_FEED, { refetchQueries: FEEDS });

  const { data, loading: getFeedLoading } = useQuery<
    GetFeedByIdReturnData,
    GetFeedByIdVariables
  >(FEED, { variables: { id: reply_id } });

  const feed: FeedType = !getFeedLoading && data.feed.feed;

  const addReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFeed({
      variables: { reply_id, user_id: activeUser.id, content }
    }).then(() => window.location.reload());
  };

  return (
    <Modal
      open={open}
      trigger={
        <Image children={<ChatBubbleOutline onClick={() => setOpen(true)} />} />
      }
      centered={false}
    >
      {!activeUser ? (
        <>
          <Modal.Header>Giriş Yapın!</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Giriş Yapın!</Header>
              <p>
                Bir feed'i yanıtlamak için önce giriş yapmanız gerekiyor. Giriş
                yapmak için aşağıdaki linke tıklayınız!
              </p>
              <a href="/login">Giriş Yap!</a>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              inverted
              content="Vazgeç"
              onClick={() => setOpen(false)}
            />
          </Modal.Actions>
        </>
      ) : (
        <>
          <Modal.Header>Yanıtla</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {getFeedLoading ? (
                <Loading size={40} />
              ) : (
                <Segment key={feed.id}>
                  <Feed size="small">
                    <Feed.Event>
                      <Feed.Label
                        image={getImageUrlByGender(feed.user.gender)}
                      />
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
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Segment>
              )}

              <Header as="h4">
                <Header.Content>
                  <a>@{!getFeedLoading && feed.user.username}</a>'e yanıt olarak
                </Header.Content>
              </Header>
              <Form reply>
                <Form.TextArea
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setContent(e.target.value)
                  }
                  style={{ minHeight: "300px" }}
                  placeholder="Yanıtını yaz"
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => setOpen(false)}
              size="small"
              color="red"
              inverted
            >
              Vazgeç
            </Button>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                addReply(e);
                !loading && setOpen(false);
              }}
              size="small"
              color="green"
              inverted
              loading={loading}
              disabled={loading || !content}
            >
              Yanıt Ekle
            </Button>
          </Modal.Actions>
        </>
      )}
    </Modal>
  );
};

export default ReplyFeed;
