import * as React from "react";
import Head from "next/head";

const Meta: React.FC = () => (
  <Head>
    <title>Berkay'ın Bloğu</title>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
      rel="stylesheet"
    ></link>
  </Head>
);

export default Meta;
