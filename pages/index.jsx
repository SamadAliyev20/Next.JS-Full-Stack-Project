import Head from "next/head";
import Home from "./home";

export default function Index() {
  return (
    <div className="prevent-select">
      <Head>
        <title>Food-Ecommerce+Next.JS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home />
    </div>
  );
}
