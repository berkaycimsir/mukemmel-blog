import * as React from "react";
import {
  Props,
  DeleteCommentReturnData,
  DeleteCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/Comment/deletecomment.interfaces";
import { Button } from "semantic-ui-react";
import { useMutation } from "react-apollo";
import { DELETE_COMMENT } from "../../../graphql/Comment/mutation";
import { GET_BLOG_BY_ID } from "../../../graphql/Blog/query";
import { GET_COMMENT_BY_USER_ID } from "../../../graphql/Comment/query";

const DeleteComment: React.FC<Props> = ({ blog_id, user_id, id }) => {
  const [deleteComment, { loading }] = useMutation<
    DeleteCommentReturnData,
    DeleteCommentVariables
  >(DELETE_COMMENT, {
    variables: { id },
    awaitRefetchQueries: true,
    refetchQueries: [
      { query: GET_BLOG_BY_ID, variables: { id: blog_id } },
      { query: GET_COMMENT_BY_USER_ID, variables: { user_id, blog_id } }
    ]
  });

  const onDelete: Function = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    deleteComment();
  };

  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onDelete(e);
      }}
      loading={loading}
      disabled={loading}
      size="mini"
      color="red"
      basic
      content={loading ? "Yükleniyor..." : "Sil"}
    />
  );
};

export default DeleteComment;
