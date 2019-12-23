import * as React from "react";
import { useState } from "react";
import { Props } from "../../../@types/interfaces/PageInterfaces/BlogDetails/likecomment.interfaces";

const LikeComment: React.FC<Props> = ({ id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const getImgUrl: Function = (): string => {
    if (isLiked === true) {
      return "https://img.icons8.com/dusk/25/000000/like.png";
    }
    return "https://img.icons8.com/wired/25/000000/like.png";
  };

  return (
    <img
      style={{ marginLeft: "3px" }}
      onClick={() => setIsLiked(!isLiked)}
      src={getImgUrl()}
    />
  );
};

export default LikeComment;
