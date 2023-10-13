import React from "react";
// ICONS
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";

const TabBar = () => {
  return (
    <div className="w-full h-[72px] mt-[88px]  px-[300px] ">
      <div className="flex h-full items-center text-[#5F6C72]">
        <div className="category flex items-center justify-center mr-[20px] w-[154px] h-[48px] bg-[#F2F4F5] ">
          <h1 className="text-[14px] text-[#191C1F]">All Category</h1>
          <RiArrowDropDownLine className="text-[32px]" />
        </div>
        <div className="track-order flex items-center mr-[20px]">
          <TiLocationOutline className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Track Order</h1>
        </div>
        <div className="customer-support flex items-center mr-[20px]">
          <RiCustomerServiceLine className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Customer Support</h1>
        </div>
        <div className="customer-support flex items-center mr-[20px]">
          <BsInfoCircle className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Need Help</h1>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
