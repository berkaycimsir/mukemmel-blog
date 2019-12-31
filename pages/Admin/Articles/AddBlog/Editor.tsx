import * as React from "react";
import { Editor as EditorComponent } from "@tinymce/tinymce-react";
import { init, API_KEY } from "../../../../utils/editor/editor.config";
import { Grid, Segment } from "semantic-ui-react";
import BlogOptionsAccordion from "./BlogOptionsAccordion";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/AddBlog/editor.interfaces";

const Editor: React.FC<Props> = ({ activeUser }) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={13}>
        <EditorComponent
          apiKey={API_KEY}
          value={value}
          onEditorChange={content => setValue(content)}
          init={init}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <BlogOptionsAccordion activeUser={activeUser} content={value} />
      </Grid.Column>
    </Grid>
  );
};

export default Editor;
