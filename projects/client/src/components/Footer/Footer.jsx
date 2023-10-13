import React from 'react'
import Logo from '../Logo/Logo'
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full h-[404px] bg-[#191C1F] fixed bottom-0'>
      <div className='py-[72px] px-[300px] flex gap-10 '>
        <div className='grid gap-2'>
            <Logo logoCSS={""}/>
            <div className='grid mt-2'>
            <span className='text-gray-500'>Customer Support :</span>
            <span className='text-gray-50'>(629) 555-0129</span>                
            </div>
            <div className='grid text-gray-400'>
                <span>4517 Washington Ave.</span>
                <span>Manchester, Kentucky 39495</span>
            </div>
            <span className='text-gray-50'>info@techheaven.com</span>
        </div>
        <div className='grid'>
            <span>Top Category</span>
            <span>Computer & Laptop</span>
            <span>SmartPhone</span>
            <span>HeadPhone</span>
            <span>Camera & Photo</span>
            <span>TV & Homes</span>
            <span>Browser All Products <AiOutlineArrowRight /> </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer
