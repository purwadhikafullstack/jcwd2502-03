import React from "react";
import Input from "../Input/Input";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="w-full bg-primaryBlue h-[88px]">
      <div className="w-[1320px] h-full m-auto flex items-center align-middle justify-between">
        <div className="flex gap-2 align-middle items-center">
          <span>
            <svg
              width="42"
              height="48"
              viewBox="0 0 42 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.929 47.7965C9.389 47.7965 0 38.4075 0 26.8665C0 19.4805 3.776 12.7835 10.102 8.95351C10.4241 8.75843 10.7814 8.6287 11.1536 8.57172C11.5258 8.51474 11.9056 8.53163 12.2713 8.62142C12.6369 8.71121 12.9814 8.87216 13.2848 9.09505C13.5883 9.31795 13.8449 9.59844 14.04 9.92051C14.2351 10.2426 14.3648 10.5999 14.4218 10.9721C14.4788 11.3443 14.4619 11.7241 14.3721 12.0898C14.2823 12.4555 14.1214 12.7999 13.8985 13.1033C13.6756 13.4068 13.3951 13.6634 13.073 13.8585C8.478 16.6405 5.735 21.5045 5.735 26.8665C5.735 35.2455 12.551 42.0615 20.93 42.0615C29.309 42.0615 36.124 35.2455 36.124 26.8665C36.124 21.4165 33.18 16.3515 28.437 13.6515C28.103 13.4689 27.8087 13.2216 27.5713 12.924C27.3338 12.6264 27.1581 12.2846 27.0542 11.9183C26.9503 11.5521 26.9204 11.1689 26.9662 10.7909C27.012 10.413 27.1326 10.048 27.321 9.71722C27.5094 9.38642 27.7617 9.09644 28.0634 8.86421C28.365 8.63198 28.7099 8.46215 29.0778 8.36462C29.4458 8.26709 29.8295 8.24382 30.2066 8.29617C30.5836 8.34852 30.9465 8.47543 31.274 8.66951C34.4849 10.5016 37.1549 13.1495 39.0136 16.3451C40.8724 19.5407 41.854 23.1706 41.859 26.8675C41.858 38.4075 32.471 47.7965 20.929 47.7965ZM20.711 26.5805C19.128 26.5805 17.211 25.2965 17.211 23.7135V3.07051C17.211 1.48751 19.128 0.203506 20.711 0.203506C22.294 0.203506 24.211 1.48751 24.211 3.07051V23.7135C24.211 25.2965 22.294 26.5805 20.711 26.5805Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-white font-bold text-3xl">TechHeaven</span>
        </div>

        <div className="flex rounded-md items-center gap-4 bg-white w-[50%] relative">
          <Input placeholder={"Search for anything..."} inputCSS={"w-full "} />
          <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute"/>
        </div>
        <div className="flex gap-5">
          <span className="relative">
            <span className="absolute right-[-10px] px-[8px] py-[2px] top-[-5px] text-primaryBlue text-xs rounded-full bg-white ">1</span>
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
