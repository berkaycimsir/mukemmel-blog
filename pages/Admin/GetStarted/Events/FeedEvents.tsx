import * as React from "react";
import { useQuery } from "react-apollo";
import { Feed as FeedType } from "../../../../@types/types/database/DatabaseTypes";
import Loading from "../../../../components/Loading/Loading";
import { Card, Feed, Header, Image } from "semantic-ui-react";
import Moment from "react-moment";
import Pagination from "../../../../components/Pagination/Pagination";
import { getImageUrlByGender } from "../../../../utils/functions/getUserImageUrl";
import { GetFeedsReturnData } from "../../../../@types/interfaces/PageInterfaces/Feed/feedlist.interfaces";
import { FEEDS } from "../../../../graphql/Feed/query";

const FeedEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data: getFeedsData, loading: getFeedsLoading } = useQuery<
    GetFeedsReturnData
  >(FEEDS);

  let totalFeeds: Array<FeedType>;

  let indexOfLastFeed: number;
  let indexOfFirstFeed: number;
  let currentFeeds: Array<FeedType>;

  if (!getFeedsLoading) {
    totalFeeds = getFeedsData.feeds;
    indexOfLastFeed = currentPage * 3;
    indexOfFirstFeed = indexOfLastFeed - 3;
    currentFeeds = totalFeeds.slice(indexOfFirstFeed, indexOfLastFeed);
  }

  return (
    <div style={{ marginTop: "15px" }}>
      {getFeedsLoading ? (
        <Loading size={30} />
      ) : (
        <Card.Content>
          <Feed>
            <Header as="h4" content="Son yapılan feed'ler:" />
            {currentFeeds.map((feed: FeedType) => (
              <Feed.Event key={feed.id}>
                <Feed.Label>
                  <Image
                    size="mini"
                    src={getImageUrlByGender(feed.user.gender)}
                  />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>
                    {feed.user.name} {feed.user.surname} &nbsp;
                    <Moment date={feed.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>
                    {feed.content}{" "}
                    <a href={`/social/feed/details/${feed.id}`}>
                      Feed'e git...
                    </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
            <Pagination
              itemsPerPage={3}
              totalItems={totalFeeds}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollTo={false}
            />
          </Feed>
        </Card.Content>
      )}
    </div>
  );
};

export default FeedEvents;
