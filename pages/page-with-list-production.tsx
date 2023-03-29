import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event list on production</h1>
    <section>
      <iframe src={'https://shop.entradio.sk/11/events?limit=10'} width="90%" height="600px">
      </iframe>
    </section>
  </Layout>
}
