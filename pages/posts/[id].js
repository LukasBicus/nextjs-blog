import Head from "next/head";
import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";

export default ({postData}) => {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1>{postData.title}</h1>
    <br/>
    {postData.id}
    <br/>
    {postData.date}
  </Layout>
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}