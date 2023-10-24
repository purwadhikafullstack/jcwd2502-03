import React from 'react'
import CardCategory from '../CardCategory/CardCategory'
import { Link } from 'react-router-dom'

const ShopWithCategorys = () => {
  return (
    <>
      <div className='flex rounded-md  flex-wrap flex-col'>
        <div className='text-center font-bold text-2xl mb-5'>
            Shop With Categorys
        </div>
        <div className='flex flex-wrap wrapper  justify-center gap-2 mt-3'>
            <Link to={"/product?categori=Laptop"}><CardCategory kategori={"Laptop"}/></Link>
            <Link to={"/product?categori=SmartPhone"} ><CardCategory kategori={"SmartPhone"}/></Link>
            <Link to={"/product?categori=Headphones"}><CardCategory kategori={"Headphones"}/></Link>
            <Link to={"/product?categori=Accessories"}><CardCategory kategori={"Accessories"}/></Link>
        </div>
      </div>
    </>
  )
}

export default ShopWithCategorys
