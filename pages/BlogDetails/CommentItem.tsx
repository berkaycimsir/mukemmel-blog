import * as React from "react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/commentitem.interfaces";
import { Comment } from "semantic-ui-react";
import Moment from "react-moment";

const CommentItem: React.FC<Props> = ({ activeUser, comment }) => {
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

  return (
    <Comment key={comment.id}>
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
      </Comment.Content>
    </Comment>
  );
};

export default CommentItem;
