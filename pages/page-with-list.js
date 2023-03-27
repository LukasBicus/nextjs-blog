import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default () => {
  return <div className={styles.container}>
    <Head>
      <title>Page with iframe</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <h1>Page with event list</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    <iframe src={'http://localhost:3001/2/events?limit=10'} width="90%" height="600px">
    </iframe>
  </div>
}
