import * as React from "react";
import { Editor as EditorComponent } from "@tinymce/tinymce-react";
import { init, API_KEY } from "../../../../utils/editor/editor.config";
import { Grid, Segment } from "semantic-ui-react";
import AddBlogOptionsAccordion from "./AddBlogOptionsAccordion";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/AddBlog/addblogeditor.interfaces";

const AddBlogEditor: React.FC<Props> = ({ activeUser }) => {
  const [content, setContent] = React.useState<string>("");

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={13}>
        <EditorComponent
          apiKey={API_KEY}
          value={content}
          onEditorChange={content => setContent(content)}
          init={init}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <AddBlogOptionsAccordion
          activeUser={activeUser}
          content={content}
          setContent={setContent}
        />
      </Grid.Column>
    </Grid>
  );
};

export default AddBlogEditor;
