import {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css"

export default ({postData}: { postData: { id: string; title: string; date: string; contentHtml: string } }) => {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date}/>
      </div>
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </article>
  </Layout>
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}