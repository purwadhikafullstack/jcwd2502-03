import React from "react";
import product1 from "../../assets/product1.png";
import "./cardproduct.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

const CardProduct = () => {
  return (
    <div className="max-w-[248px] max-h-[296px] mt-[88px]  border cursor-pointer">
      <div className="p-[16px]">
        <div className="card">
          <img src={product1} alt="" />
          <div className="overlay">
            <div className="flex gap-2">
              <span className="relative">
                <AiOutlineHeart className="text-white bg-primaryOrange p-2 rounded-full h-[48px] w-[48px]" />
              </span>
              <AiOutlineShoppingCart className="text-black bg-white p-2 rounded-full h-[48px] w-[48px]" />
              <CiUser className="text-black font-bold bg-white p-2 rounded-full h-[48px] w-[48px]" />
            </div>
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
  );
};

export default CardProduct;
