import * as React from "react";
import { useQuery } from "react-apollo";
import { GetBlogsReturnData } from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../../graphql/Blog/query";
import { Feed } from "semantic-ui-react";
import { FileCopy } from "@material-ui/icons";
import Loading from "../../../../components/Loading/Loading";

const PageStatistics: React.FC = () => {
  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  let totalPagesInBlog: number;
  const blogsPerPage: number = 9;

  if (!getBlogsLoading) {
    totalPagesInBlog = Math.round(getBlogsData.blogs.length / blogsPerPage);
  }

  return (
    <>
      {getBlogsLoading ? (
        <Loading size={30} />
      ) : (
        <Feed.Event>
          <Feed.Label icon={<FileCopy />} />
          <Feed.Content>
            <Feed.Date>{totalPagesInBlog + " sayfa"}</Feed.Date>
            <Feed.Summary
              content={`Şu ana kadar ki blogların toplam ${totalPagesInBlog} sayfa ediyor.`}
            />
          </Feed.Content>
        </Feed.Event>
      )}
    </>
  );
};

export default PageStatistics;
