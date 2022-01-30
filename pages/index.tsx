import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/UI";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EduPortal-CET</title>
      </Head>
      <Button as="a" href="https://google.com">LOGIN</Button>

    </div>
  );
};

export default Home;
