import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../../components/Button/Button";
import CancelOrderModal from "../../components/CancelOrderModal/CancelOrderModal";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import product1 from "../../assets/product1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PageInfo from "../../components/PageInfo/PageInfo";
import TabBar from "../../components/TabBar/TabBar";

const DetailProduct = () => {
  return (
    <>
    <TabBar />

      <div className="h-full w-[1000px] flex-wrap flex">
        <div className="grid items-center justify-center bg-slate-400 gap-[10px] mb-5">
          <div className="border">
            <img
              className="w-full object-contain h-[200px]"
              src={product1}
              alt=""
            />
          </div>
          <div className="flex gap-3 cursor-pointer justify-between">
            <img
              className="cursor-pointer min-w-[96px] max-w-[200px] h-[96px] border"
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer min-w-[96px] max-w-[100px] h-[96px] border"
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer min-w-[96px] max-w-[100px] h-[96px] border"
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer min-w-[96px] max-w-[100px] h-[96px] border"
              src={product1}
              alt=""
            />
          </div>
        </div>
        <div className="flex px-5 flex-col justify-between">
          <div className="flex flex-col">
            <div className="text-3xl font-bold border-b-2 mb-5">
              Asus ROG Phone 5s 12/256
            </div>
            <div className=" text-2xl mb-2 font-bold">DESKRIPSI</div>
            <div className="">
              Asus Rog phone 3 8/128GB 12/128 12/256GB FULLSETT TAM : FULLSET
              DENGAN ACC DAN BOX ORIGINAL UNIT ONLY : SECOND BATANGAN TIDAK
              TERMASUK ACC DAN BOX Asus Rog Phone 2 8/128GB 12/256GB FULLSETT
              TAM : FULLSET DENGAN ACC DAN BOX ORIGINAL ( 90% -95% unit second
              tidak mulus 100% ) UNIT ONLY : SECOND BATANGAN TIDAK TERMASUK ACC
              DAN BOX GARANSI TOKO 30 HARI UNTUK VARIAN SECOND FULLSET TAM , (
              di luar human eror
            </div>
          </div>
          <div className="shop grid grid-cols-4 mt-3 gap-5">
            <div className="flex gap-5 h-full border-primaryOrange border-2 rounded-md justify-around items-center cursor-pointer bg-white">
              <span className=" pl-6 flex justify-center cursor-pointer items-center align-middle   w-[16px] text-4xl">
                -
              </span>
              <span className="  flex justify-center items-center align-middle cursor-pointer w-[16px]  text-lg">
                1
              </span>
              <span className="  pr-5 flex justify-center items-center align-middle cursor-pointer w-[16px]  text-3xl">
                +
              </span>
            </div>
            <div className="col-span-2 flex justify-center border-primaryOrange border-2 rounded-md bg-primaryOrange">
              <div className="flex justify-center items-center px-3">
                <Button
                  btnCSS={" text-white text-xl font-bold"}
                  btnName={"ADD TO CART"}
                />
                <AiOutlineShoppingCart className="text-white font-bold text-3xl" />
              </div>
            </div>
            <div className="bg-white text-primaryOrange border-solid border-primaryOrange">
              <div className="flex justify-center items-center border-primaryOrange border-2 rounded-md px-3">
                <Button
                  btnName={"BUY NOW"}
                  btnCSS={
                    "px-3 text-xl font-bold bg-white text-[rgba(250, 130, 50, 1)] "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
