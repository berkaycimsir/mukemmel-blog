import * as React from "react";
import { useState } from "react";
import { useMutation } from "react-apollo";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Popup, Image } from "semantic-ui-react";
import { LIKE_FEED } from "../../graphql/Feed/mutation";
import {
  LikeFeedReturnData,
  LikeFeedVariables,
  Props
} from "../../@types/interfaces/PageInterfaces/Feed/likefeed.interfaces";
import { FEEDS } from "../../graphql/Feed/query";

const LikeFeed: React.FC<Props> = ({ id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [likeFeed, { loading }] = useMutation<
    LikeFeedReturnData,
    LikeFeedVariables
  >(LIKE_FEED, {
    variables: { id, isUnliking: isLiked },
    refetchQueries: [{ query: FEEDS }]
  });

  const onLikeFeed = (e: React.MouseEvent<SVGSVGElement>): void => {
    if (!loading) {
      e.preventDefault();
      likeFeed();
      setIsLiked(!isLiked);
    }
  };

  return (
    <Popup
      trigger={
        <Image
          disabled={loading}
          loading={loading}
          children={
            isLiked ? (
              <Favorite
                htmlColor="red"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => onLikeFeed(e)}
              />
            ) : (
              <FavoriteBorder
                htmlColor="red"
                onClick={(e: React.MouseEvent<SVGSVGElement>) => onLikeFeed(e)}
              />
            )
          }
        />
      }
      content={isLiked ? "Beğenmekten vazgeç!" : "Feed'i beğen!"}
      size="small"
    />
  );
};

export default LikeFeed;
