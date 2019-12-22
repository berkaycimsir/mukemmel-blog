import * as React from "react";
import {
  Props,
  GetCommentByUserIdReturnData,
  GetCommentByUserIdVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/comments.interfaces";
import { Comment, Divider } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GET_COMMENT_BY_USER_ID } from "../../graphql/Comment/query";
import Loading from "../../components/Loading/Loading";
import { Comment as CommentType } from "../../@types/types/Blog";
import CommentItem from "./CommentItem";

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
  );
};

export default Comments;
