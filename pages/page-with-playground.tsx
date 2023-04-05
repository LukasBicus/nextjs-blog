import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with playground</h1>
    <section>
      <iframe src={'http://localhost:4000/graphql'} width="90%" height="600px">
      </iframe>
    </section>
  </Layout>
}
