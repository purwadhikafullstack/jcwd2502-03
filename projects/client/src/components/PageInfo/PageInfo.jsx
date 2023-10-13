import React from 'react'

//icons 
import { AiOutlineHome } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";

const PageInfo = () => {
  return (
    <div>
       <div className="px-[300px] mt-[16px] h-[72px]  w-full flex  items-center text-[14px] text-gray bg-[#F2F4F5]">
        <div className="flex items-center mr-[20px]">
          <AiOutlineHome className="text-[20px] mr-[8px]" />
          <h1 className="text-[#5F6C72]">Home</h1>
        </div>
        <div className="flex items-center">
          <TbMathGreater className="text-[15px] mr-[10px]" />
          <h1 className="text-[#5F6C72]">Shop</h1>
        </div>
      </div>
    </div>
  )
}

export default PageInfo
