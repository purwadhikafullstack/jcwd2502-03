import React from 'react'
import kategori1 from "../../assets/kategori1.png";

const CardCategory = ({kategori}) => {

  return (
    <div className="max-w-[205px] hover:border-primaryOrange rounded-md min-w-[205px] max-h-[236px] border cursor-pointer">
      <div className="p-[18px]">
        <div className="flex justify-center text-gray-950">
            <img src={kategori1} alt="" />
        </div>
          <div className=" max-w-[216px] mt-2 flex justify-center text-sm ">
            {kategori}
          </div>
      </div>
    </div>
  )
}

export default CardCategory
