import * as React from "react";
import {
  Comment as CommentType,
  User
} from "../../@types/types/database/DatabaseTypes";
import { Segment, Message, Comment, Divider, Header } from "semantic-ui-react";
import CommentItem from "../BlogDetails/Comment/CommentItem";

type Props = {
  comments: CommentType[];
  activeUser: User;
  activeUserDeleteComment: boolean;
};

const UserComments: React.FC<Props> = ({
  comments,
  activeUser,
  activeUserDeleteComment
}) => {
  return (
    <Segment color="teal" raised>
      {comments.length !== 0 && (
        <>
          <Header
            content={`Bu kullanıcı ${comments.length} yorum yapmış!`}
            as="h4"
          />
          <Divider />
        </>
      )}
      {comments.length === 0 && (
        <Message
          error
          header="Bu kullanıcı hiç yorum yapmamış!"
          content="İstersen sen hemen yorum yapabilirsin!"
        />
      )}
      <Comment.Group>
        {comments.map((comment: CommentType) => (
          <>
            <CommentItem
              key={comment.id}
              comment={comment}
              activeUser={activeUser}
              activeUserDeleteComment={activeUserDeleteComment}
            />
            <Divider />
          </>
        ))}
      </Comment.Group>
    </Segment>
  );
};

export default UserComments;
