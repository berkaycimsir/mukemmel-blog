import * as React from "react";
import { useState } from "react";
import {
  Props,
  LikeCommentReturnData,
  LikeCommentVariables
} from "../../../@types/interfaces/PageInterfaces/BlogDetails/Comment/likecomment.interfaces";
import { useMutation } from "react-apollo";
import { LIKE_COMMENT } from "../../../graphql/Comment/mutation";
import {
  GET_COMMENT_BY_USER_ID,
  GET_COMMENTS
} from "../../../graphql/Comment/query";
import { Favorite, FavoriteBorder, Loop } from "@material-ui/icons";
import { Popup, Icon } from "semantic-ui-react";

const LikeComment: React.FC<Props> = ({ user_id, blog_id, id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [likeComment, { loading }] = useMutation<
    LikeCommentReturnData,
    LikeCommentVariables
  >(LIKE_COMMENT, {
    variables: { id, isUnliking: isLiked },
    refetchQueries: [
      { query: GET_COMMENT_BY_USER_ID, variables: { user_id, blog_id } },
      { query: GET_COMMENTS }
    ]
  });

  const onLikeComment: Function = (
    e: React.MouseEvent<SVGSVGElement>
  ): void => {
    if (!loading) {
      e.preventDefault();
      setIsLiked(!isLiked);
      likeComment();
    }
  };

  return (
    <Popup
      trigger={
        <Icon
          disabled={loading}
          loading={loading}
          children={
            isLiked ? (
              <Favorite
                htmlColor="red"
                style={{ marginLeft: "3px" }}
                onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                  onLikeComment(e)
                }
              />
            ) : (
              <FavoriteBorder
                htmlColor="red"
                style={{ marginLeft: "3px" }}
                onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                  onLikeComment(e)
                }
              />
            )
          }
        />
      }
      content={isLiked ? "Beğenmekten vazgeç!" : "Yorumu beğen!"}
      size="small"
    />
  );
};

export default LikeComment;
