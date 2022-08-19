import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Meta } from "@/components/ui/Meta";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>いいいい</title>
        {/* <Meta siteTtl="トップページ" /> */}
      </Head>

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <h1 className={styles.title}>ああああ</h1>
          <Button label="ボタンだよ" onClick={() => console.log("おしたよ")} />
          <Link href="/about">
            <a>abputページへ</a>
          </Link>
        </main>

        <Footer />
      </div>
    </>
  );
};

export { Home };
