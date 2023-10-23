import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import CardProduct from '../CardProduct/CardProduct';
import { Link } from 'react-router-dom';

const BestDeals = () => {
  return (
    <div className='max-w-[1920px]'>
      <div className='w-[1320px]  m-auto my-[72px] grid'>
        <div className='flex justify-between p-[8px]'>
            <span className='py-[8px] font-semibold text-2xl'>Best Deals</span>
            <Link to={"/product?categori=&sortBy="} ><span className='text-[#2DA5F3] py-[8px]'>Browse All Product <AiOutlineArrowRight className='inline' /></span></Link>
        </div>
        <div className='w-full'>
            <div className='flex gap-2 flex-wrap mx-[20px]'>
            <CardProduct />
            </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals
