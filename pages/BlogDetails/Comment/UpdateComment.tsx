import * as React from "react";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import {
  Props,
  UpdateCommentReturnData,
  UpdateCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/updatecomment.intrefaces";

const UpdateComment: React.FC<Props> = ({ blog_id, user_id, id }) => {
  const [content, setContent] = useState<string>("");

  return (
    <Form reply>
      <Form.TextArea
        style={{ minHeight: "12em" }}
        placeholder="Enter your comment"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      <Button type="submit" content="Update Comment" primary />
    </Form>
  );
};

export default UpdateComment;
