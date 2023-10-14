import React from "react";
import product1 from "../../assets/product1.png";
import "./cardproduct.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="max-w-[248px] min-w-[248px] max-h-[296px]  border cursor-pointer">
      <div className="p-[16px]">
        <div className="cardd">
          <div className="">
            <img src={product1} alt="" />
          </div>
          <div className="overla">
            <div className="flex gap-2">
              <span className="">
                <AiOutlineHeart className="text-white bg-primaryOrange p-2 rounded-full h-[48px] w-[48px]" />
              </span>
              <AiOutlineShoppingCart className="text-black bg-white p-2 rounded-full h-[48px] w-[48px]" />
              <AiOutlineEye className="text-black font-bold bg-white p-2 rounded-full h-[50px] w-[50px]" />
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
