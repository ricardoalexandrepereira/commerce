import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black mx-auto rounded text-white py-3 w-80 text-center'>Shop Now</h1>
            <span className='w-20 h-[3px] bg-gray-700' ></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione iure distinctio illo sed 
            dolorem quis, odit ipsum laboriosam vero ex eaque dignissimos magnam, corrupti illum quas? Excepturi mollitia possimus magni. Corporis nostrum magni at enim 
            explicabo voluptatem maxime cumque, adipisci asperiores esse, non consectetur necessitatibus vitae fuga rerum, illo sed illum saepe nemo inventore doloribus 
            sapiente temporibus impedit! Eveniet?</p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductsCard />
        </div>
    </div>
  )
}

export default Products