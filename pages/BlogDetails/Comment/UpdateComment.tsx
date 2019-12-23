import * as React from "react";
import { Button } from "semantic-ui-react";
import { Props } from "../../../@types/interfaces/PageInterfaces/BlogDetails/updatecomment.intrefaces";

const UpdateComment: React.FC<Props> = ({ blog_id, user_id, id }) => {
  return <Button size="mini" color="green" basic content="Update" />;
};

export default UpdateComment;
