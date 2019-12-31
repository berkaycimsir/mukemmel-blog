import * as React from "react";
import { Table, Label, Image } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import { GetBlogsReturnData } from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/statistics.interfaces";
import { GET_BLOGS } from "../../../../graphql/Blog/query";
import { Blog } from "../../../../@types/types/database/DatabaseTypes";
import Moment from "react-moment";
import Loading from "../../../../components/Loading/Loading";
import Pagination from "../../../../components/Pagination/Pagination";
import DeleteBlog from "./DeleteBlog";
import { getImageUrlByGender } from "../../../../utils/functions/getUserImageUrl";

const AllBlogs: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data: getBlogsData, loading: getBlogsLoading } = useQuery<
    GetBlogsReturnData
  >(GET_BLOGS);

  if (getBlogsLoading) return <Loading size={50} />;

  let totalBlogs: Array<Blog>;

  let indexOfLastBlog: number;
  let indexOfFirstBlog: number;
  let currentBlogs: Array<Blog>;

  if (!getBlogsLoading) {
    totalBlogs = getBlogsData.blogs;
    indexOfLastBlog = currentPage * 12;
    indexOfFirstBlog = indexOfLastBlog - 12;
    currentBlogs = totalBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Başlık</Table.HeaderCell>
          <Table.HeaderCell>Yazar</Table.HeaderCell>
          <Table.HeaderCell>Kategori</Table.HeaderCell>
          <Table.HeaderCell>Tarih</Table.HeaderCell>
          <Table.HeaderCell>Görüntülenme</Table.HeaderCell>
          <Table.HeaderCell>İşlemler</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {currentBlogs.map((blog: Blog) => (
          <Table.Row key={blog.id}>
            <Table.Cell>
              <a href={`/blog/details/${blog.id}`}>
                <Label color="violet" ribbon content={blog.title} />
              </a>
            </Table.Cell>
            <Table.Cell>
              <Image
                src={getImageUrlByGender(blog.user.gender)}
                circular
                size="mini"
                avatar
              />
              <b style={{ marginLeft: "3px" }}>
                {blog.user.name} {blog.user.surname}
              </b>
            </Table.Cell>
            <Table.Cell>{blog.category}</Table.Cell>
            <Table.Cell>
              <b>
                <Moment date={blog.createdAt} format="DD/MM/YY" />
              </b>
            </Table.Cell>
            <Table.Cell>{blog.views}</Table.Cell>
            <Table.Cell>
              <DeleteBlog id={blog.id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="6">
            <Pagination
              itemsPerPage={12}
              totalItems={totalBlogs}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollTo={true}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default AllBlogs;
