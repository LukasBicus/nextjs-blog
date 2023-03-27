import Head from 'next/head';
import Link from "next/link";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>I’m passionate writing clean, maintainable code and believe that code reviews and test-driven development are essential practices for achieving this goal</p>
        <p>
          Read <Link href="/page-with-list">Page with list</Link>
          <br/>
          Read <Link href="/page-with-event">Page with event detail</Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
