import * as React from "react";
import {
  Props,
  GetCommentByUserIdReturnData,
  GetCommentByUserIdVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/comments.interfaces";
import { Comment, Divider, Message } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GET_COMMENT_BY_USER_ID } from "../../../graphql/Comment/query";
import Loading from "../../../components/Loading/Loading";
import { Comment as CommentType } from "../../../@types/types/Blog";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";
import { NavLink } from "react-router-dom";

const Comments: React.FC<Props> = ({ activeUser, comments }) => {
  let activeUserComment: CommentType;

  if (activeUser) {
    const { data, loading } = useQuery<
      GetCommentByUserIdReturnData,
      GetCommentByUserIdVariables
    >(GET_COMMENT_BY_USER_ID, {
      variables: { user_id: activeUser.id }
    });

    if (loading) return <Loading size={50} />;

    activeUserComment = data.getCommentByUserId.comment;
  }

  return (
    <>
      <Comment.Group>
        {activeUser && activeUserComment !== null && (
          <>
            <CommentItem activeUser={activeUser} comment={activeUserComment} />
            <Divider />
          </>
        )}
        {comments.map(comment => {
          if (comment.user_id !== activeUser.id)
            return <CommentItem activeUser={activeUser} comment={comment} />;
        })}
      </Comment.Group>
      {activeUser && activeUserComment === null ? (
        <AddComment />
      ) : activeUser && activeUserComment !== null ? null : (
        <Message color="brown">
          <Message.Header>Yorum yapmak için giriş yapınız!</Message.Header>
          <Divider />
          <Message.Content>
            Yorum yapmak için giriş yapınız!{" "}
            <NavLink style={{ color: "#935b38" }} to="/login">
              <b> Giriş Yap</b>
            </NavLink>{" "}
            <br />
            Hesabınız yok mu?{" "}
            <NavLink style={{ color: "#935b38" }} to="/signup">
              <b> Kayıt Ol</b>
            </NavLink>
          </Message.Content>
        </Message>
      )}
    </>
  );
};

export default Comments;
