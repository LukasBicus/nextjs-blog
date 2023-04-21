import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event list on production</h1>
    <section>
      <iframe src={'https://shop.entradio.cz/event/157'} width="90%" height="600px">
      </iframe>
      {/*<iframe src={'https://shop.entradio.sk/event/11'} width="90%" height="600px">*/}
      {/*</iframe>*/}
    </section>
  </Layout>
}
