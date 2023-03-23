import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default () => {
  return <div className={styles.container}>
    <Head>
      <title>First post page</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <h1>First Post</h1>
    <main>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      First post page content
    </main>
  </div>
}
