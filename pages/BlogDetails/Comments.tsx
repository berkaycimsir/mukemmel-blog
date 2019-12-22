import * as React from "react";
import { Props } from "../../@types/interfaces/PageInterfaces/BlogDetails/comments.interfaces";
import { Comment, Icon } from "semantic-ui-react";
import Moment from "react-moment";

const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <Comment.Group>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
          />
          <Comment.Content>
            <Comment.Author>
              {comment.user.name} {comment.user.surname}
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
      ))}
    </Comment.Group>
  );
};

export default Comments;
