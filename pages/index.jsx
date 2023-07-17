import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food-Ecommerce+Next.JS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}
