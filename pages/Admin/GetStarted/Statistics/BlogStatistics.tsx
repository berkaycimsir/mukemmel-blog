import * as React from "react";
import { useQuery } from "react-apollo";
import { GetBlogsReturnData } from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../../graphql/Blog/query";
import { Feed } from "semantic-ui-react";
import { Create } from "@material-ui/icons";
import Loading from "../../../../components/Loading/Loading";

const BlogStatistics: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  return (
    <>
      {getBlogsLoading ? (
        <Loading size={30} />
      ) : (
        <Feed.Event>
          <Feed.Label icon={<Create />} />
          <Feed.Content>
            <Feed.Date>{getBlogsData.blogs.length + " yazı"}</Feed.Date>
            <Feed.Summary
              content={`Şu ana kadar blogunda ${getBlogsData.blogs.length} yazı yazılmış.`}
            />
          </Feed.Content>
        </Feed.Event>
      )}
    </>
  );
};

export default BlogStatistics;
