import React from 'react'
import CardCategory from '../CardCategory/CardCategory'

const ShopWithCategorys = () => {
  return (
    <div className='max-w-[1920px]'>
      <div className='w-[1320px] m-auto  grid gap-5'>
        <div className='text-center font-bold text-2xl'>
            Shop With Categorys
        </div>
        <div className='flex wrapper justify-center gap-2 mt-3'>
            <CardCategory kategori={"Komputer & Laptop"}/>
            <CardCategory kategori={"SmartPhone"}/>
            <CardCategory kategori={"Headphones"}/>
            <CardCategory kategori={"Accessories"}/>
            <CardCategory kategori={"Camera & Photo"}/>
            <CardCategory kategori={"TV & Homes"}/>
        </div>
      </div>
    </div>
  )
}

export default ShopWithCategorys
