import * as React from "react";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import {
  Props,
  UpdateCommentReturnData,
  UpdateCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/updatecomment.intrefaces";
import { useMutation } from "react-apollo";
import { UPDATE_COMMENT } from "../../../graphql/Comment/mutation";
import { GET_COMMENT_BY_USER_ID } from "../../../graphql/Comment/query";

const UpdateComment: React.FC<Props> = ({
  setIsUpdating,
  blog_id,
  user_id,
  id
}) => {
  const [content, setContent] = useState<string>("");

  const [updateComment, { loading }] = useMutation<
    UpdateCommentReturnData,
    UpdateCommentVariables
  >(UPDATE_COMMENT, {
    refetchQueries: [
      { query: GET_COMMENT_BY_USER_ID, variables: { blog_id, user_id } }
    ]
  });

  const resetTextAreaValue: Function = (): void => setContent("");

  const onUpdateComment: Function = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    updateComment({ variables: { id, content } }).then(() => {
      resetTextAreaValue();
      setIsUpdating(false);
    });
  };

  const formValidate: Function = (): boolean => !content;

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => onUpdateComment(e)}
      reply
    >
      <Form.TextArea
        disabled={loading}
        style={{ minHeight: "12em" }}
        placeholder="Yorumunuzu girin..."
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      <Button
        loading={loading}
        disabled={loading || formValidate()}
        type="submit"
        content="Yorumunu Güncelle"
        primary
      />
    </Form>
  );
};

export default UpdateComment;
