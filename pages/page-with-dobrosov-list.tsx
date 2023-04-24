import Layout from "../components/layout";

export default () => {
  return <Layout>
    <h1>Page with event list</h1>
    <section>
      <iframe
        src={'https://shop.entradio.cz/143/events?eventButtonTarget=_self&backgroundColor=transparent&limit=12&from=2023-05-07T22:00:00.000Z&to=2023-05-08T21:59:59.000Z'}
        width="90%" height="600px">
      </iframe>
    </section>
  </Layout>
}
