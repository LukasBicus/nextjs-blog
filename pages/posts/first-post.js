import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default () => {
  return <Layout>
    <Head>
      <title>First post page</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <h1>First Post</h1>
    <main>
      <Image src="/images/5645414.jpeg" alt="Lukas Bicus" width="200" height={200}/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      First post page content
    </main>
  </Layout>
}
