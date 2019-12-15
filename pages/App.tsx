import * as React from "react";
import Head from "next/head";
import Home from "./Home/Home";
import "../utils/css/index.css";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "semantic-ui-react";

const App: React.FC = () => (
  <div className="wrapper">
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
    </Head>

    <Navbar />
    <Container style={{ width: "65%" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Home />
      </div>
    </Container>
  </div>
);

export default App;
