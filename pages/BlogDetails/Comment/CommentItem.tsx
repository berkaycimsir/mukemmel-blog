import * as React from "react";
import { useState } from "react";
import { Props } from "../../../@types/interfaces/PageInterfaces/BlogDetails/commentitem.interfaces";
import { Comment, Button } from "semantic-ui-react";
import Moment from "react-moment";
import DeleteComment from "./DeleteComment";
import UpdateComment from "./UpdateComment";
import LikeComment from "./LikeComment";

const CommentItem: React.FC<Props> = ({
  activeUserDeleteComment,
  activeUser,
  comment
}) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const menGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
  ];

  const womenGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
  ];

  const getImageUrlByGender: Function = (gender: string): string => {
    return gender === "men" ? menGenderImageUrl[0] : womenGenderImageUrl[0];
  };

  return (
    <Comment>
      <Comment.Avatar as="a" src={getImageUrlByGender(comment.user.gender)} />
      <Comment.Content>
        <Comment.Author>
          {comment.user.name} {comment.user.surname}{" "}
          {activeUser.id === comment.user_id && "(your comment)"}
        </Comment.Author>
        <Comment.Metadata>
          <div>
            <Moment date={comment.createdAt} fromNow ago /> ago
          </div>
          <div>{comment.likes} likes</div>
        </Comment.Metadata>
        <Comment.Text>{comment.content}</Comment.Text>
        {activeUserDeleteComment === true && (
          <Comment.Action>
            <DeleteComment
              blog_id={comment.blog_id}
              id={comment.id}
              user_id={comment.user.id}
            />
            <Button
              style={{ marginLeft: "3px" }}
              onClick={() => setIsUpdating(!isUpdating)}
              size="mini"
              color="green"
              basic
              content={isUpdating ? "Vazgeç" : "Güncelle"}
            />
            <LikeComment id={comment.id} />
          </Comment.Action>
        )}
        {isUpdating === true && (
          <UpdateComment
            blog_id={comment.blog_id}
            id={comment.id}
            user_id={comment.user.id}
            setIsUpdating={setIsUpdating}
          />
        )}
      </Comment.Content>
    </Comment>
  );
};

export default CommentItem;
