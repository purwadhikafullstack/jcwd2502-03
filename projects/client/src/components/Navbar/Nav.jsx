import React from "react";
import Input from "../Input/Input";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <div className="w-full bg-primaryBlue h-[88px] fixed top-0 z-50">
      <div className="w-[1320px] h-full m-auto flex items-center align-middle justify-between">
        <Logo />

        <div className="flex rounded-md items-center gap-4 bg-white w-[50%] relative">
          <Input placeholder={"Search for anything..."} inputCSS={"w-full "} />
          <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute" />
        </div>
        <div className="flex gap-5">
          <span className="relative">
            <span className="absolute right-[-10px] px-[8px] py-[2px] top-[-5px] text-primaryBlue text-xs rounded-full bg-white ">
              1
            </span>
            <AiOutlineShoppingCart className="text-white h-[32px] w-[32px]" />
          </span>

          <AiOutlineHeart className="text-white h-[32px] w-[32px]" />
          <CiUser className="text-white h-[32px] w-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
