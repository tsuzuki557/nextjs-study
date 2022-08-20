import Image from "next/image";

import styles from "./Footer.module.css";

// 注意！next/Imageの場合、ローカル画像を使う場合はインポートする必要がある
import vercelLogo from "public/vercel.svg";
import sampleImg from "public/sample.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="" target="_blank" rel="noopener noreferrer">
        テキスト
        <span className={styles.logo}>
          <Image
            src={vercelLogo}
            alt="Vercel Logo"
            width={72}
            height={16}
            priority
          />
          <Image
            src={sampleImg}
            layout="responsive"
            alt="実験中"
            //placeholder="blur"
            width={800}
            height={200}
            style={{ transition: "200ms" }}
            priority
          />
        </span>
        {/* 注意！ インポートしたものは、ベースパスを元に自動で変換してくれる */}
        <img src="/docs/vercel.svg" alt="仮テキスト" />
        <img
          src={vercelLogo.src}
          alt="仮テキスト02"
          width={vercelLogo.width}
          height={vercelLogo.height}
        />
      </a>
    </footer>
  );
};

export { Footer };
