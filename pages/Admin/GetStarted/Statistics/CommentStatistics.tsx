import * as React from "react";
import { useQuery } from "react-apollo";
import {
  GetBlogsReturnData,
  GetAllCommentsReturnData
} from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../../graphql/Blog/query";
import { Feed } from "semantic-ui-react";
import { ChatBubble } from "@material-ui/icons";
import Loading from "../../../../components/Loading/Loading";
import { GET_ALL_COMMENTS } from "../../../../graphql/Comment/query";

const CommentStatistics: React.FC = () => {
  const { data: getCommentsData, loading: getCommentsLoading } = useQuery<
    GetAllCommentsReturnData
  >(GET_ALL_COMMENTS);

  return (
    <>
      {getCommentsLoading ? (
        <Loading size={30} />
      ) : (
        <Feed.Event>
          <Feed.Label icon={<ChatBubble />} />
          <Feed.Content>
            <Feed.Date>{getCommentsData.comments.length + " yorum"}</Feed.Date>
            <Feed.Summary
              content={`Şu ana kadar blog yazılarına ${getCommentsData.comments.length} yorum yapılmış.`}
            />
          </Feed.Content>
        </Feed.Event>
      )}
    </>
  );
};

export default CommentStatistics;
