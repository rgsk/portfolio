import Footer from "components/Footer";
import Home from "components/Home";
import type { NextPage } from "next";
import Head from "next/head";

const PageHome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rahul Gupta</title>
        <meta
          name="description"
          content="Hi, I'm Rahul Gupta, a passionate web developer."
        />
        <link rel="icon" href="/mf-avatar.svg" />
      </Head>

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default PageHome;
