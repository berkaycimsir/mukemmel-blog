import * as React from "react";
import { useQuery } from "react-apollo";
import { GET_BLOGS } from "../../graphql/Blog/query";

const BlogList: React.FC = () => {
  const { data, error, loading } = useQuery(GET_BLOGS);

  return <div>blog list</div>;
};

export default BlogList;
