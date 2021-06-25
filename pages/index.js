import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NuWeb - test</title>
        <meta name="description" content="Teste de front-end da NuWeb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
