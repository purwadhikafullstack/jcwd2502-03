import React from "react";
import { GoStack } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { TbReport } from "react-icons/tb";
import { LuWarehouse } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { MdOutlineLibraryBooks } from "react-icons/md";

const SidebarAdmin = ({ tabValue, setTabValue, currentPath }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="left w-[264px] h-full border-[1px]  shadow-2xl rounded-[4px] py-[16px]">
        <Link to={"/admin/dashboard"}>
          <div
            onClick={() => {
              setTabValue(1);
            }}
            className={`flex  items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              currentPath === "/admin/dashboard"
                ? "bg-primaryOrange  text-white"
                : ""
            }`}
          >
            <GoStack className="text-[18px]" />
            <h1 className="text-[14px] ">Dashboard</h1>
          </div>
        </Link>
        <Link to={"/admin/users"}>
          <div
            onClick={() => setTabValue(2)}
            className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              currentPath === "/admin/users"
                ? "bg-primaryOrange  text-white"
                : ""
            }`}
          >
            <FaUsers className="text-[18px]" />
            <h1 className="text-[14px] ">Users</h1>
          </div>
        </Link>
        <Link to={"/admin/warehouses"}>
          <div
            onClick={() => setTabValue(3)}
            className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              currentPath === "/admin/warehouses"
                ? "bg-primaryOrange  text-white"
                : ""
            }`}
          >
            <LuWarehouse className="text-[18px]" />
            <h1 className="text-[14px] ">Warehouses</h1>
          </div>
        </Link>
        <Link to={"/admin/products"}>
          <div
            onClick={() => setTabValue(4)}
            className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              currentPath === "/admin/products" || currentPath === "/admin/category" 
                ? "bg-primaryOrange  text-white"
                : ""
            }`}
          >
            <SlEarphones className="text-[18px]" />
            <h1 className="text-[14px] ">Products</h1>
          </div>
        </Link>
        <Link to={"/admin/approval"}>
          <div
            onClick={() => setTabValue(10)}
            className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              tabValue === 10 ? "bg-primaryOrange  text-white" : ""
            }`}
          >
            <MdOutlineLibraryBooks className="text-[18px]" />
            <h1 className="text-[14px] ">Orders Approval</h1>
          </div>
        </Link>
        <Link to={"/admin/report"}>
          <div
            onClick={() => setTabValue(5)}
            className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
              tabValue === 5 ? "bg-primaryOrange  text-white" : ""
            }`}
          >
            <TbReport className="text-[18px]" />
            <h1 className="text-[14px] ">Report</h1>
          </div>
        </Link>
        <div
          onClick={() => setTabValue(6)}
          className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 6 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <GoSignOut className="text-[18px]" />
          <h1 className="text-[14px] ">Logout</h1>
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
