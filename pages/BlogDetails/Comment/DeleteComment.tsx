import * as React from "react";
import {
  Props,
  DeleteCommentReturnData,
  DeleteCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/deletecomment.interfaces";
import { Button } from "semantic-ui-react";
import { useMutation } from "react-apollo";
import { DELETE_COMMENT } from "../../../graphql/Comment/mutation";

const DeleteComment: React.FC<Props> = ({ id }) => {
  const [deleteComment, { loading }] = useMutation<
    DeleteCommentReturnData,
    DeleteCommentVariables
  >(DELETE_COMMENT, {
    variables: { id }
  });

  return <Button size="mini" color="red" basic content="Delete" />;
};

export default DeleteComment;
