import React from 'react'
import product1 from "../../assets/product1.png";

const CardCategory = () => {
  return (
    <div className="max-w-[205px] min-w-[205px] mt-[88px] max-h-[236px] border cursor-pointer">
      <div className="p-[16px]">
        <div className="">
          <div className="static">
            <img src={product1} alt="" />
          </div>
        </div>
        <div className="">
          <div className="h-[40px] max-w-[216px] overflow-hidden text-ellipsis text-sm">
            Bose Sport Earbuds-Wireless Earphone-Bluetooth In Ear Blala Blala
            Blala Blala
          </div>
          <div className="mt-[4px] text-[#2DA5F3] font-semibold">
            Rp. 10.000
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCategory
