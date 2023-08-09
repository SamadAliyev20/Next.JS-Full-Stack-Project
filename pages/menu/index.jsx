import MenuWrapper from '@/components/product/MenuWrapper'
import axios from 'axios'
import React from 'react'

const Index = ({categories, products}) => {
  console.log(products);
  return (
    <div className='pt-10'>
        <MenuWrapper categories={categories} products={products}/>
    </div>
  )
}

export default Index

export const getServerSideProps = async () => {
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
   return {
     props: {
       categories: category.data ? category.data : [],
       products: product.data ? product.data : [],
     },
   };
 }