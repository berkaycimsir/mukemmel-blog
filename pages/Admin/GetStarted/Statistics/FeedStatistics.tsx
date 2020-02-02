import * as React from "react";
import { useQuery } from "react-apollo";
import { Feed } from "semantic-ui-react";
import { Share } from "@material-ui/icons";
import Loading from "../../../../components/Loading/Loading";
import { FEEDS_FOR_ONLY_LENGTH } from "../../../../graphql/Feed/query";
import { GetFeedsReturnData } from "../../../../@types/interfaces/PageInterfaces/Feed/feedlist.interfaces";
import { Feed as FeedType } from "../../../../@types/types/database/DatabaseTypes";

const FeedStatistics: React.FC = () => {
  const { data: getFeedsData, loading: getFeedsLoading } = useQuery<
    GetFeedsReturnData
  >(FEEDS_FOR_ONLY_LENGTH);

  let feeds: FeedType[];

  if (!getFeedsLoading) {
    feeds = getFeedsData.feeds;
  }

  return (
    <>
      {getFeedsLoading ? (
        <Loading size={30} />
      ) : (
        <Feed.Event>
          <Feed.Label icon={<Share />} />
          <Feed.Content>
            <Feed.Date>{feeds.length + " feed"}</Feed.Date>
            <Feed.Summary
              content={`Şu ana kadar blogunda ${feeds.length} feed paylaşılmış.`}
            />
          </Feed.Content>
        </Feed.Event>
      )}
    </>
  );
};

export default FeedStatistics;
