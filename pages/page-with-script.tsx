import Script from "next/script";
import Layout from "../components/layout";

export default () => {
  return <Layout>
    <Script strategy="beforeInteractive">
      {`console.log("Hello world")`}
    </Script>
    <Script strategy="beforeInteractive" src="/loginLead.js"></Script>
    <h1>Page with event list on production</h1>
    <section>
      <div id="iframe-shop-entradio-event">
        Iframe div 'iframe-shop-entradio-event'
      </div>
      <div id="iframe-shop-entradio-cart">
        Iframe div 'iframe-shop-entradio-cart'
      </div>
    </section>
  </Layout>
}
