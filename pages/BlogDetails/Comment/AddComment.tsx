import * as React from "react";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "react-apollo";
import {
  AddCommentReturnData,
  AddCommentVariables,
  Props
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/Comment/addcomment.interfaces";
import { ADD_COMMENT } from "../../../graphql/Comment/mutation";
import {
  GET_COMMENT_BY_USER_ID,
  GET_COMMENTS
} from "../../../graphql/Comment/query";
import { GET_BLOG_BY_ID } from "../../../graphql/Blog/query";
import { IOnSubmitFunc } from "../../../@types/types/functions/Comment/types";

const AddComment: React.FC<Props> = ({ blog_id, activeUser }) => {
  const [content, setContent] = useState<string>("");
  const blogId: string = window.location.pathname.split("/")[3];

  const [createComment, { loading }] = useMutation<
    AddCommentReturnData,
    AddCommentVariables
  >(ADD_COMMENT, {
    awaitRefetchQueries: true,
    refetchQueries: [
      { query: GET_BLOG_BY_ID, variables: { id: blog_id } },
      {
        query: GET_COMMENT_BY_USER_ID,
        variables: { user_id: activeUser.id, blog_id }
      },
      { query: GET_COMMENTS }
    ]
  });

  const formValidate: Function = (): boolean => !content;

  const resetValues: Function = (): void => setContent("");

  const onSubmit: IOnSubmitFunc = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    createComment({
      variables: { blog_id: blogId, user_id: activeUser.id, content }
    }).then(() => resetValues());
  };

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)} reply>
      <Form.TextArea
        disabled={loading}
        style={{ minHeight: "15em" }}
        placeholder="Yorumunuzu buraya giriniz..."
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setContent(e.target.value);
        }}
      />
      <Button
        loading={loading}
        disabled={loading || formValidate()}
        type="submit"
        content="Yorum Yap"
        primary
      />
    </Form>
  );
};

export default AddComment;
