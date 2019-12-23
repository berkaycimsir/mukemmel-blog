import * as React from "react";
import { Form, Button } from "semantic-ui-react";
import { Props } from "../../../@types/interfaces/PageInterfaces/BlogDetails/updatecomment.intrefaces";

const UpdateComment: React.FC<Props> = ({ blog_id, user_id, id }) => {
  return (
    <Form reply>
      <Form.TextArea
        style={{ minHeight: "12em" }}
        placeholder="Enter your comment"
      />
      <Button type="submit" content="Update Comment" primary />
    </Form>
  );
};

export default UpdateComment;
