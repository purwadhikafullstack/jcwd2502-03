import React, { useState } from "react";
import Input from "../Input/Input";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [cartDrop, setCartDrop] = useState(0);
  const navigate = useNavigate();

  const handleCartDropDown = () => {
    setCartDrop(!cartDrop);
  };
  const handleCheckoutNow = () => {
    navigate("/checkout");
    setCartDrop(!cartDrop);
  };
  const handleViewCart = () => {
    navigate("/cart");
    setCartDrop(!cartDrop);
  };

  return (
    <div className="w-full bg-primaryBlue h-[88px] fixed top-0 z-50">
      <div className="w-[1320px] h-full m-auto flex items-center align-middle justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex rounded-md items-center gap-4 bg-white w-[50%] relative">
          <Input placeholder={"Search for anything..."} inputCSS={"w-full "} />
          <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute" />
        </div>
        <div className="flex gap-5">
          <span className="relative">
            <span className="absolute right-[-10px] px-[8px] py-[2px] top-[-5px] text-primaryBlue text-xs rounded-full bg-white ">
              1
            </span>
            <AiOutlineShoppingCart
              onClick={handleCartDropDown}
              className="text-white h-[32px] w-[32px]"
            />
            {/* CART DROP */}

            <div
              className={`${
                cartDrop ? "cart-slide-in" : "cart-slide-out"
              } w-[376px] h-[480px] bg-white absolute rounded-xl shadow-xl`}
            >
              <h1 className="py-[16px] px-[24px]  ">Shopping Cart</h1>
              <div className="px-[24px] h-[220px] overflow-auto py-[20px] border-y-[2px] ">
                <div className="flex items-center gap-2 mb-[16px]">
                  <div>
                    <img className="w-[80px] h-[80px] " src="" alt="" />
                  </div>
                  <div className=" w-full flex justify-between items-center">
                    <div className="flex flex-col h-full ">
                      <h1 className="text-[14px]">
                        Canon EOS 1500D DSLR Camera Body+ 18-55 mm
                      </h1>
                      <div className="flex gap-2 ">
                        <h1>1x</h1>
                        <h2 className="text-primaryBlue text-[14px]">
                          Rp. 1.000.000
                        </h2>
                      </div>
                    </div>
                    <FaTimes className="cursor-pointer text-[#929FA5] text-[16px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-[24px] py-[20px]">
                <h1>Sub-total :</h1>
                <h1>Rp. 1.000.000</h1>
              </div>
              <div className="px-[24px]">
                <button
                  onClick={handleCheckoutNow}
                  className="flex gap-3 text-white items-center w-full justify-center bg-primaryOrange h-[48px] "
                >
                  CHECKOUT NOW <AiOutlineArrowRight />
                </button>
                <button
                  onClick={handleViewCart}
                  className=" my-[20px]  text-primaryOrange bg-white border-[2px] border-primaryOrange items-center w-full h-[48px]"
                >
                  VIEW CART
                </button>
              </div>
            </div>
            {/* END CART DROP */}
          </span>
          <AiOutlineHeart className="text-white h-[32px] w-[32px]" />
          <CiUser className="text-white h-[32px] w-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
