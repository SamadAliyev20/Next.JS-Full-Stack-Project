import Head from "next/head";
import Home from "./home";
import axios from "axios";

export default function Index({ categories,products }) {
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
      <Home categories={categories} products={products} />
    </div>
  );
}

export const getServerSideProps = async () => {
 const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
 const product = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/products`
);
  return {
    props: {
      categories: category.data ? category.data : [],
      products: product.data ? product.data : [],
    },
  };
}