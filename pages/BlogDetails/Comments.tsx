import * as React from "react";
import {
  Props,
  GetCommentByUserIdReturnData,
  GetCommentByUserIdVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/comments.interfaces";
import { Comment, Divider } from "semantic-ui-react";
import Moment from "react-moment";
import { useQuery } from "react-apollo";
import { GET_COMMENT_BY_USER_ID } from "../../graphql/Comment/query";
import Loading from "../../components/Loading/Loading";
import { Comment as CommentType } from "../../@types/types/Blog";

const Comments: React.FC<Props> = ({ activeUser, comments }) => {
  const menGenderImageUrls: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
    "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    "https://react.semantic-ui.com/images/avatar/small/joe.jpg",
    "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
    "https://react.semantic-ui.com/images/avatar/small/steve.jpg"
  ];

  const womenGenderImageUrls: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
    "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
  ];

  const getImageUrlByGender: Function = (gender: string): string => {
    if (gender === "men") {
      const randomIndexForMenGender: number = Math.floor(Math.random() * 5);
      return menGenderImageUrls[randomIndexForMenGender];
    }

    if (gender === "women") {
      const randomIndexForWomenGender: number = Math.floor(Math.random() * 2);
      return womenGenderImageUrls[randomIndexForWomenGender];
    }
  };

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
          <Comment key={activeUserComment.id}>
            <Comment.Avatar
              as="a"
              src={getImageUrlByGender(activeUserComment.user.gender)}
            />
            <Comment.Content>
              <Comment.Author>
                {activeUserComment.user.name} {activeUserComment.user.surname}{" "}
                (yorumun)
              </Comment.Author>
              <Comment.Metadata>
                <div>
                  <Moment date={activeUserComment.createdAt} fromNow ago /> ago
                </div>
                <div>{activeUserComment.likes} likes</div>
              </Comment.Metadata>
              <Comment.Text>{activeUserComment.content}</Comment.Text>
            </Comment.Content>
          </Comment>
          <Divider />
        </>
      )}
      {comments.map(comment => {
        if (comment.user_id !== activeUser.id)
          return (
            <Comment key={comment.id}>
              <Comment.Avatar
                as="a"
                src={getImageUrlByGender(comment.user.gender)}
              />
              <Comment.Content>
                <Comment.Author>
                  {comment.user.name} {comment.user.surname}{" "}
                </Comment.Author>
                <Comment.Metadata>
                  <div>
                    <Moment date={comment.createdAt} fromNow ago /> ago
                  </div>
                  <div>{comment.likes} likes</div>
                </Comment.Metadata>
                <Comment.Text>{comment.content}</Comment.Text>
              </Comment.Content>
            </Comment>
          );
      })}
    </Comment.Group>
  );
};

export default Comments;
