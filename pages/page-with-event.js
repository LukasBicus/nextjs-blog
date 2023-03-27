import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default () => {
  return <div className={styles.container}>
    <Head>
      <title>Page with iframe</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <h1>Page with event detail</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    <iframe src={'http://localhost:3001/event/1'} width="90%" height="600px">
    </iframe>
  </div>
}
