import * as React from "react";
import { useMutation } from "react-apollo";
import {
  DeleteFeedReturnData,
  DeleteFeedVariables,
  Props
} from "../../@types/interfaces/PageInterfaces/Feed/deletefeed.interfaces";
import { DELETE_FEED } from "../../graphql/Feed/mutation";
import { Delete, DeleteOutline } from "@material-ui/icons";
import { FEEDS } from "../../graphql/Feed/query";
import { Popup, Image } from "semantic-ui-react";

const DeleteFeed: React.FC<Props> = ({ id }) => {
  const [deleteFeed, { loading }] = useMutation<
    DeleteFeedReturnData,
    DeleteFeedVariables
  >(DELETE_FEED, {
    variables: { id },
    refetchQueries: [{ query: FEEDS }]
  });

  const onDeleteFeed = (e: React.MouseEvent<SVGSVGElement>): void => {
    if (!loading) {
      e.preventDefault();
      deleteFeed();
    }
  };

  return (
    <Popup
      trigger={
        <Image
          disabled={loading}
          loading={loading}
          children={
            <DeleteOutline
              htmlColor="black"
              onClick={(e: React.MouseEvent<SVGSVGElement>) => onDeleteFeed(e)}
            />
          }
        />
      }
      content="Feed'i Sil"
      size="small"
    />
  );
};

export default DeleteFeed;
