export const API_KEY: string = `ozsyenypm55y7y1jdfy8lhocwyb9h5d9z3wa51wwft56su9p`;

const content_css: Array<string> = [
  "//fonts.googleapis.com/css?family=Poppins&display=swap"
];

const font_formats: string = "Poppins=poppins;";

const plugins: string = `
  advlist autolink lists link image charmap print preview hr anchor 
  searchreplace wordcount visualblocks visualchars code 
  insertdatetime media nonbreaking save table hr
  emoticons template paste textpattern codesample
`;

const toolbar: string = `
  insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image
  checklist code formatpainter insertfile pageembed permanentpen table | print preview media | forecolor backcolor emoticons | codesample
`;

const codesample_languages: {
  text?: string;
  value?: string;
}[] = [
  { text: "HTML/XML", value: "markup" },
  { text: "JavaScript", value: "javascript" },
  { text: "CSS", value: "css" },
  { text: "PHP", value: "php" },
  { text: "Ruby", value: "ruby" },
  { text: "Python", value: "python" },
  { text: "Java", value: "java" },
  { text: "C", value: "c" },
  { text: "C#", value: "csharp" },
  { text: "C++", value: "cpp" }
];

interface InitType {
  [key: string]: any;
}

export const init: InitType = {
  height: "1400px",
  language: "tr_TR",
  content_css,
  font_formats,
  plugins,
  toolbar,
  codesample_languages,
  toolbar_drawer: "floating",
  tinycomments_mode: "embedded",
  tinycomments_author: "Author name",
  paste_data_images: true
};
