import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

//CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress
        color="rgb(98, 166, 255)"
        startPosition={0.1}
        stopDelayMs={400}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
