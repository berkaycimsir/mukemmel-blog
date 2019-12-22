import * as React from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "react-apollo";
import {
  AddCommentReturnData,
  AddCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/addcomment.interfaces";
import { ADD_COMMENT } from "../../../graphql/Comment/mutation";
import { GET_BLOG_BY_ID } from "../../../graphql/Blog/query";

const AddComment: React.FC = () => {
  const [addComment, { loading }] = useMutation<
    AddCommentReturnData,
    AddCommentVariables
  >(ADD_COMMENT, {
    refetchQueries: [
      {
        query: GET_BLOG_BY_ID,
        variables: { id: window.location.pathname.split("/")[3] }
      }
    ]
  });

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
