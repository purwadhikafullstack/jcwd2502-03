import React from "react";
// ICONS
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <div className="w-full h-auto mt-[104px] mb-[24px]  px-[300px] ">
      <div className="flex h-full items-center text-[#5F6C72] ">
        {/* <div className="">
          <select
            className="select select-bordered w-full max-w-[312px]"
          >
            <option disabled selected>
              Pick Kategori
            </option>
            <option value={""}>All Product</option>
            <option><Link to={"/product?categori=Laptop"}>"Laptop"</Link></option>
            <option><Link to={"/product?categori=SmartPhone"} >"SmartPhone"</Link></option>
            <option></option><Link to={"/product?categori=Headphones"}>"Headphones"</Link>
            <option></option><Link to={"/product?categori=Accessories"}>"Accessories"</Link>
          </select>
        </div> */}
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
