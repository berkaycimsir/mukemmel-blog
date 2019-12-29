import * as React from "react";
import { Editor as EditorComponent } from "@tinymce/tinymce-react";
import { init, API_KEY } from "../../../../utils/editor/editor.config";

const Editor: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  return (
    <EditorComponent
      apiKey={API_KEY}
      value={value}
      onEditorChange={content => setValue(content)}
      init={init}
    />
  );
};

export default Editor;
