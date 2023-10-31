import React from "react";
import { GoStack } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { LuWarehouse } from "react-icons/lu";
import { PiNotebookDuotone } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";
import { HiArrowLeft } from "react-icons/hi";
const SidebarAdmin = ({tabValue, setTabValue}) => {
  return (
    <>
      <div className="left w-[264px] h-full border-[1px]  shadow-2xl rounded-[4px] py-[16px]">
        <div
          onClick={() => setTabValue(1)}
          className={`flex  items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 1 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <GoStack className="text-[18px]" />
          <h1 className="text-[14px] ">Dashboard</h1>
        </div>
        <div
          onClick={() => setTabValue(2)}
          className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 2 || tabValue === 7 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <FaUsers className="text-[18px]" />
          <h1 className="text-[14px] ">User</h1>
        </div>
        <div
          onClick={() => setTabValue(3)}
          className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 3 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <LuWarehouse className="text-[18px]" />
          <h1 className="text-[14px] ">Warehouse</h1>
        </div>
        <div
          onClick={() => setTabValue(4)}
          className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 4 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <PiNotebookDuotone className="text-[18px]" />
          <h1 className="text-[14px] ">Addresses</h1>
        </div>
        <div
          onClick={() => setTabValue(5)}
          className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
            tabValue === 5 ? "bg-primaryOrange  text-white" : ""
          }`}
        >
          <LuSettings className="text-[18px]" />
          <h1 className="text-[14px] ">Settings</h1>
        </div>
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
