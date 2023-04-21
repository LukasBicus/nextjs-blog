import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event list</h1>
    <section>
      <iframe src={'https://localhost:3001/1/events?limit=10'} width="90%" height="600px">
      </iframe>
    </section>
  </Layout>
}
