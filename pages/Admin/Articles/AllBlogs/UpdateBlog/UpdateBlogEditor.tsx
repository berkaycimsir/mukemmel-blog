import * as React from "react";
import { Editor as EditorComponent } from "@tinymce/tinymce-react";
import { Grid, Segment } from "semantic-ui-react";
import UpdateBlogOptionsAccordion from "./UpdateBlogOptionsAccordion";
import { Props } from "../../../../../@types/interfaces/PageInterfaces/Admin/Articles/UpdateBlog/updateblogeditor.interfaces";
import { API_KEY, init } from "../../../../../utils/editor/editor.config";
import { useQuery } from "react-apollo";
import {
  GetBlogByIdReturnType,
  GetBlogByIdVariables
} from "../../../../../@types/interfaces/PageInterfaces/BlogDetails/blogdetails.interfaces";
import { GET_BLOG_BY_ID } from "../../../../../graphql/Blog/query";
import Loading from "../../../../../components/Loading/Loading";
import { Blog } from "../../../../../@types/types/database/DatabaseTypes";

const Editor: React.FC<Props> = ({ activeUser }) => {
  let blog: Blog;

  const [content, setContent] = React.useState<string>("");

  const blogId: string = location.pathname.split("/")[3];

  const { data, loading: getBlogByIdLoading } = useQuery<
    GetBlogByIdReturnType,
    GetBlogByIdVariables
  >(GET_BLOG_BY_ID, { variables: { id: blogId } });

  if (getBlogByIdLoading) return <Loading size={50} />;

  blog = data.blog.blog;

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={13}>
        <EditorComponent
          apiKey={API_KEY}
          value={blog.content}
          onEditorChange={content => setContent(content)}
          init={init}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <UpdateBlogOptionsAccordion
          activeUser={activeUser}
          content={content}
          setContent={setContent}
          blog={blog}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Editor;
