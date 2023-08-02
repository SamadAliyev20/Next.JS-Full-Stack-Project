import Head from "next/head";
import Home from "./home";
import axios from "axios";

export default function Index({ categories }) {
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
      <Home categories={categories} />
    </div>
  );
}

export const getServerSideProps = async () => {
 const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
 console.log(res.data);
  return {
    props: {
      categories: res.data ? res.data : [],
    },
  };
}