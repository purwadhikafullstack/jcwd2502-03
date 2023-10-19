import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import { PiNotebookDuotone } from "react-icons/pi";
import { TfiPackage } from "react-icons/tfi";
import { TbTruck } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import ProductTableViewDetails from "../ProductTableViewDetails/ProductTableViewDetails";
const OrderViewDetails = ({setTabValue}) => {
  return (
    <>
      <div onClick={() => setTabValue(2)} className="cursor-pointer px-[24px] py-[16px] flex mb-[24px]  items-center gap-3 border-b-2">
        <HiOutlineArrowSmLeft className="text-[24px]" />
        <h1>ORDER DETAILS</h1>
      </div>
      <div className="w-full px-[24px] mb-[24px]">
        <div className="h-[104px] p-[24px] bg-[#FDFAE7] border-[4px] border-[#F7E99E] flex justify-between items-center mb-[24px]">
          <div>
            <h1 className="text-[20px] mb-[8px] text-[#191C1F]">#1204801381</h1>
            <h1 className="text-[14px] text-[#475156]">
              4 Products Order Placed in 17 Jan, 2021 at 7:32 PM
            </h1>
          </div>
          <h1 className="text-[28px] text-[#2DA5F3]">Rp. 3.250.000</h1>
        </div>
        <h1>Order expected arrival 23 Jan, 2021</h1>
      </div>
      <div className="px-[24px] flex justify-center flex-col  border-b-2">
        <div className="flex  justify-center items-center mb-[32px]">
          <AiFillCheckCircle className="bg-white text-[32px] text-primaryOrange" />
          <div className="w-[200px] h-[8px] bg-primaryOrange"></div>
          <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
          <div className="w-[200px] h-[8px] bg-[#FFE7D6]"></div>
          <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
          <div className="w-[200px] h-[8px] bg-[#FFE7D6]"></div>
          <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
        </div>
        <div className="flex px-[24px]  justify-center gap-[110px] mb-[24px]">
          <div className="flex w-[120px] h-auto  flex-col items-center gap-3">
            <PiNotebookDuotone className="text-[32px] text-[#2DB224]" />
            <h1>Order Placed</h1>
          </div>
          <div className="flex w-[120px] h-auto flex-col items-center gap-3">
            <TfiPackage className="text-[32px] text-primaryOrange" />
            <h1>Packaging</h1>
          </div>
          <div className="flex w-[120px] h-auto flex-col items-center gap-3">
            <TbTruck className="text-[32px] text-primaryOrange" />
            <h1>On The Road</h1>
          </div>
          <div className="flex w-[120px] h-auto flex-col items-center gap-3">
            <FaRegHandshake className="text-[32px] text-primaryOrange" />
            <h1>Delivered</h1>
          </div>
        </div>
      </div>
      <div className="py-[32px]  px-[24px] w-full  border-b-2">
        <h1 className="text-[18px] mb-[24px]">Order Activity</h1>
        <div className="flex gap-[16px] h-full mb-[16px]">
          <div className="w-[48px] h-[48px] bg-[#EAF7E9] flex justify-center items-center">
            <BsCheck2All className="text-[24px] text-[#2DB224]" />
          </div>
          <div className="h-[48px] flex flex-col justify-between ">
            <h1 className="text-[14px] text-[#191C1F]">
              Your order has been delivered. Thank you for shopping at Clicon!
            </h1>
            <h1 className="text-[14px] text-[#77878F]">
              23 Jan, 2021 at 7:32 PM
            </h1>
          </div>
        </div>
      </div>
      <div className="py-[32px] px-[24px] border-b-2">
        <h1 className="text-[18px] mb-[24px]">Product </h1>
        <ProductTableViewDetails />
      </div>
      <div className="px-[24px] py-[32px]">
        <h1 className="text-[18px] mb-[24px]">Shipping Address</h1>
        <h1 className="text-[#191C1F]">Rafansa Oktaviano</h1>
        <h1 className="text-[#5F6C72]">
          East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat
          No. 5D, Dhaka - 1200, Bangladesh
        </h1>
        <div className="flex gap-2">
          <h1>Phone Number : </h1>
          <h1 className="text-[#5F6C72]">08124832137</h1>
        </div>
        <div className="flex gap-2">
          <h1>Email : </h1>
          <h1 className="text-[#5F6C72]">ravansaoktaviano@gmail.com</h1>
        </div>
      </div>
    </>
  );
};

export default OrderViewDetails;
