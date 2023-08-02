import MenuWrapper from '@/components/product/MenuWrapper'
import axios from 'axios'
import React from 'react'

const Index = ({categories}) => {
  return (
    <div className='pt-10'>
        <MenuWrapper categories={categories}/>
    </div>
  )
}

export default Index

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  console.log(res.data);
   return {
     props: {
       categories: res.data ? res.data : [],
     },
   };
 }