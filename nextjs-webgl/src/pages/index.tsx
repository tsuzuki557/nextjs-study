import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "../components/Box";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>実験</title>
      </Head>

      <main>
        <h1>webglの実験</h1>
        <Box />
      </main>

      <footer>フッター</footer>
    </div>
  );
};

export default Home;
