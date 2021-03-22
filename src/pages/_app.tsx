import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
