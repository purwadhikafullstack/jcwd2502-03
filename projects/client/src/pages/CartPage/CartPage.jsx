import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useNavigate } from "react-router-dom";
//icon
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

//components
import Button from "../../components/Button/Button";
import CartTableList from "../../components/CartTableList/CartTableList";

import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="">
      <TabBar />
      <PageInfo />
      <div className="px-[300px] flex gap-5 mb-[150px]">
        <div className="left-side w-[70%] h-auto border-[#E4E7E9] border-2  ">
          <h1 className="text-[18px] px-[24px] py-[20px]">Shopping Cart</h1>
          <div>
            <CartTableList />
            <div className="w-full flex  justify-between px-[24px] py-[24px]  ">
              <button className="cursor-pointer px-[24px] h-[48px] border-2 border-[#2DA5F3] bg-white rounded-none text-[#2DA5F3] flex items-center gap-2">
                <AiOutlineArrowLeft className="text-[20px]" /> RETURN TO SHOP
              </button>
              <Button
                btnName="UPDATE CART"
                btnCSS="px-[24px] h-[48px] border-2 border-[#2DA5F3] bg-white rounded-none text-[#2DA5F3] "
              />
            </div>
          </div>
        </div>
        <div className="right-side h-full w-[30%] border-[#E4E7E9] border-2 font-medium">
          <h1 className="px-[24px] pt-[20px] text-[18px] font-semibold ">
            Cart Totals
          </h1>
          <div className="flex justify-between px-[24px] pt-[24px] text-[14px]">
            <h1 className="text-[#5F6C72]">Sub-total</h1>
            <h1 className="text-[#191C1F]">Rp. 2.000.000</h1>
          </div>
          <div className="flex justify-between px-[24px] py-[12px] text-[14px]">
            <h1 className="text-[#5F6C72] ">Shipping</h1>
            <h1 className="text-[#191C1F]">Rp. 100.000</h1>
          </div>
          <div className="flex justify-between px-[24px] pb-[24px] text-[14px]">
            <h1 className="text-[#5F6C72] ">Tax(5%)</h1>
            <h1 className="text-[#191C1F] ">Rp. 105.000</h1>
          </div>
          <div className="flex justify-between mx-[24px] font-semibold  py-[20px] border-t-2 text-[14px]">
            <h1 className="text-[#191C1F] text-[16px]">Total</h1>
            <h1 className="text-[#191C1F] text-[16px]">Rp. 2.205.000</h1>
          </div>
          <div
            onClick={() => {
              navigate("/checkout");
            }}
            className="w-full h-[56px] px-[24px] mb-[24px]"
          >
            <button className="w-full cursor-pointer h-full rounded-none text-white font-bold bg-primaryOrange flex justify-center items-center gap-5">
              PROCEED TO CHECKOUT <AiOutlineArrowRight className="text-[px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
