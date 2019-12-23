import * as React from "react";
import { Props } from "../../../@types/interfaces/PageInterfaces/BlogDetails/deletecomment.interfaces";
import { Button } from "semantic-ui-react";

const DeleteComment: React.FC<Props> = ({ id }) => {
  return <Button size="mini" color="red" basic content="Delete" />;
};

export default DeleteComment;
