import * as React from "react";
import { useQuery } from "react-apollo";
import { GetBlogsReturnData } from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../../graphql/Blog/query";
import { Blog } from "../../../../@types/types/DatabaseTypes";
import Loading from "../../../../components/Loading/Loading";
import { Card, Feed, Header } from "semantic-ui-react";
import { Description } from "@material-ui/icons";
import Moment from "react-moment";
import Pagination from "../../../../components/Pagination/Pagination";

const BlogEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  let totalBlogs: Array<Blog>;

  let indexOfLastBlog: number;
  let indexOfFirstBlog: number;
  let currentBlogs: Array<Blog>;

  if (!getBlogsLoading) {
    totalBlogs = getBlogsData.blogs;
    indexOfLastBlog = currentPage * 3;
    indexOfFirstBlog = indexOfLastBlog - 3;
    currentBlogs = totalBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  }

  return (
    <div style={{ marginTop: "5px" }}>
      {getBlogsLoading ? (
        <Loading size={30} />
      ) : (
        <Card.Content>
          <Feed>
            <Header as="h4" content="Son eklenen bloglar:" />
            {currentBlogs.map((blog: Blog) => (
              <Feed.Event key={blog.id}>
                <Feed.Label icon={<Description />} />
                <Feed.Content>
                  <Feed.Date>
                    <Moment date={blog.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>
                    <a href={`/blog/details/${blog.id}`}>{blog.title}</a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
            <Pagination
              itemsPerPage={3}
              totalItems={totalBlogs}
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

export default BlogEvents;
