import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event list on production</h1>
    <section>
      <iframe src={'https://shop.entradio.cz/1/events?eventButtonTarget=_self&limit=10'} width="90%" height="600px">
      </iframe>
      {/*https://shop.entradio.cz/143/events?eventButtonTarget=_self&backgroundColor=transparent&limit=12&localeCode=cs*/}
      {/*<iframe src={'https://shop.entradio.sk/event/11'} width="90%" height="600px">*/}
      {/*</iframe>*/}
    </section>
  </Layout>
}
