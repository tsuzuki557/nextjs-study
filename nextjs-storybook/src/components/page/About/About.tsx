import type { NextPage } from "next";

import { Meta } from "@/components/ui/Meta";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

import styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <>
      <Meta siteTtl="About" />

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <h1 className={styles.title}>About</h1>
        </main>

        <Footer />
      </div>
    </>
  );
};

export { About };
