import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import Aos from "aos";

//Hooks
import { useEffect } from "react";

//CSS
import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
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
