import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event detail</h1>
    <section>
      <iframe src={'http://localhost:3001/event/1'} width="90%" height="600px">
      </iframe>
    </section>
  </Layout>
}
