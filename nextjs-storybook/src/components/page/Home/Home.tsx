import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Meta } from "@/components/ui/Meta";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <Meta siteTtl="トップページ" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ああああ</h1>
        <Button label="ボタンだよ" onClick={() => console.log("おしたよ")} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export { Home };
