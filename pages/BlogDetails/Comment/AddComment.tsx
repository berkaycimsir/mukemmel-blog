import * as React from "react";
import { Form, Button } from "semantic-ui-react";

const AddComment: React.FC = () => {
  return (
    <Form reply>
      <Form.TextArea
        style={{ minHeight: "15em" }}
        placeholder="Enter your comment here..."
      />
      <Button content="Add Comment" primary />
    </Form>
  );
};

export default AddComment;
