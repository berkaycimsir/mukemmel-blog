import * as React from "react";
import { isBrowser } from "../../lib/isBrowser";

const BlogDetails: React.FC = () => {
  const blogId: string = isBrowser && window.location.pathname.split("/")[3];

  return <div>blog details page</div>;
};

export default BlogDetails;
