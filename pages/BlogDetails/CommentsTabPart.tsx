import * as React from "react";
import { Comment, Grid, Divider, Message } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import Loading from "../../components/Loading/Loading";
import { GET_COMMENTS } from "../../graphql/Comment/query";
import {
  GetCommentsReturnData,
  Props
} from "../../@types/interfaces/PageInterfaces/BlogDetails/allcommentstab.interfaces";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import { getImageUrlByGender } from "../../utils/functions/getUserImageUrl";

const CommentsTabPart: React.FC<Props> = ({ activeUser }) => {
  const currentBlogId = window.location.pathname.split("/")[3];

  const { data, loading } = useQuery<GetCommentsReturnData>(GET_COMMENTS);

  if (loading) return <Loading size={50} />;

  return (
    <Grid>
      <Grid.Column>
        {!data.comments ||
          (data.comments.length === 0 && (
            <Message error>
              <Message.Header>Burada Hiç Yorum Yok!</Message.Header>
              <Message.Content>
                Bir tane eklemek ister misin?{" "}
                <NavLink to="/login">Giriş yap!</NavLink>
              </Message.Content>
            </Message>
          ))}
        <Comment.Group>
          {data.comments.map(comment => (
            <Comment key={comment.id}>
              <Comment.Avatar
                as="a"
                src={getImageUrlByGender(comment.user.gender)}
              />
              <Comment.Content>
                <Comment.Author>
                  {comment.user.name} {comment.user.surname}{" "}
                  {activeUser &&
                    activeUser.id === comment.user.id &&
                    "(yorumun)"}
                </Comment.Author>
                <Comment.Metadata>
                  <div>
                    <Moment date={comment.createdAt} fromNow ago /> ago
                  </div>
                  <div>{comment.likes} beğeni</div>
                </Comment.Metadata>
                <Comment.Text>
                  {comment.content.slice(0, 40)}...{" "}
                  {currentBlogId !== comment.blog_id && (
                    <NavLink to={`/blog/details/${comment.blog_id}`}>
                      Blog'a git!
                    </NavLink>
                  )}
                </Comment.Text>
              </Comment.Content>
              <Divider />
            </Comment>
          ))}
        </Comment.Group>
      </Grid.Column>
    </Grid>
  );
};

export default CommentsTabPart;
