import Head from "next/head";
import Navbar from "./Navbar.jsx";
import { ContentStyles } from "../../styles/ContentStyles";
function Content(props) {
  return (
    <ContentStyles>
      <Head>
        <title>Chess Web</title>
        <meta
          name="description"
          content="App chess made by Atari Dev. Chess was my first game in javascript, so i decided
  to do it again, but now adding a multiplayer mode using a library. I hope you enjoy :) "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <footer>este es el footer </footer>
    </ContentStyles>
  );
}

export default Content;
