import * as React from "react";
import { isBrowser } from "../../lib/isBrowser";
import { useQuery } from "react-apollo";
import { GET_BLOG_BY_ID } from "../../graphql/Blog/query";
import {
  GetBlogByIdReturnType,
  GetBlogByIdVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetails.interfaces";
import Loading from "../../components/Loading/Loading";

const BlogDetails: React.FC = () => {
  const blogId: string = isBrowser && window.location.pathname.split("/")[3];

  const { data: getBlogByIdData, loading: getBlogByIdLoading } = useQuery<
    GetBlogByIdReturnType,
    GetBlogByIdVariables
  >(GET_BLOG_BY_ID, { variables: { id: blogId } });

  if (getBlogByIdLoading) return <Loading size={50} />;

  console.log(getBlogByIdData);

  return <div>blog details page</div>;
};

export default BlogDetails;
