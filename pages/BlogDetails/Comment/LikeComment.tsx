import * as React from "react";
import { useState } from "react";
import {
  Props,
  LikeCommentReturnData,
  LikeCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/Comment/likecomment.interfaces";
import { useMutation } from "react-apollo";
import { LIKE_COMMENT } from "../../../graphql/Comment/mutation";
import { GET_COMMENT_BY_USER_ID } from "../../../graphql/Comment/query";

const LikeComment: React.FC<Props> = ({ user_id, blog_id, id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const getImgUrl: Function = (): string => {
    if (!loading) {
      if (isLiked === true) {
        return "https://img.icons8.com/dusk/25/000000/like.png";
      }
      return "https://img.icons8.com/wired/25/000000/like.png";
    }
    return "https://img.icons8.com/material-sharp/25/000000/loading.png";
  };

  const [likeComment, { loading }] = useMutation<
    LikeCommentReturnData,
    LikeCommentVariables
  >(LIKE_COMMENT, {
    variables: { id, isUnliking: isLiked },
    refetchQueries: [
      { query: GET_COMMENT_BY_USER_ID, variables: { user_id, blog_id } }
    ]
  });

  const onLikeComment: Function = (
    e: React.MouseEvent<HTMLImageElement>
  ): void => {
    if (!loading) {
      e.preventDefault();
      setIsLiked(!isLiked);
      likeComment();
    }
  };

  return (
    <img
      style={{ marginLeft: "3px" }}
      onClick={(e: React.MouseEvent<HTMLImageElement>) => onLikeComment(e)}
      src={getImgUrl()}
    />
  );
};

export default LikeComment;
