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
    <div className="max-w-[1280px] bg-slate-50 shadow-lg rounded-sm m-auto">
      <div className="h-full justify-center flex-wrap p-5 mt-[150px]  mb-20 flex ">
        <div className="flex overflow-auto flex-nowrap items-center justify-center p-4 gap-[10px]">
            <img
              className="w-full object-contain max-w-[200px] h-[200px]"
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer object-contain max-w-[200px] h-[200px] "
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer object-contain max-w-[200px] h-[200px] "
              src={product1}
              alt=""
            />
            <img
              className="cursor-pointer object-contain max-w-[200px] h-[200px] "
              src={product1}
              alt=""
            />
        </div>
        <div className="flex px-5 flex-col justify-between">
          <div className="flex flex-col">
            <div className="text-3xl mt-2 font-bold border-b-2 mb-5">
              Asus ROG Phone 5s 12/256
            </div>
            <div className=" text-2xl mb-2 font-bold">DESKRIPSI</div>
            <div className="font-light sm:max-w-[60%]">
              Asus Rog phone 3 8/128GB 12/128 12/256GB FULLSETT TAM : FULLSET
              DENGAN ACC DAN BOX ORIGINAL UNIT ONLY : SECOND BATANGAN TIDAK
              TERMASUK ACC DAN BOX Asus Rog Phone 2 8/128GB 12/256GB FULLSETT
              TAM : FULLSET DENGAN ACC DAN BOX ORIGINAL ( 90% -95% unit second
              tidak mulus 100% ) UNIT ONLY : SECOND BATANGAN TIDAK TERMASUK ACC
              DAN BOX GARANSI TOKO 30 HARI UNTUK VARIAN SECOND FULLSET TAM , (
              di luar human eror
            </div>
          </div>
          <div className="shop grid grid-cols-2 mt-5 gap-5">
            {/* <div className="flex gap-5 h-full border-primaryOrange border-2 rounded-md justify-around items-center cursor-pointer bg-white">
              <span className=" pl-6 flex justify-center cursor-pointer items-center align-middle   w-[16px] text-4xl">
                -
              </span>
              <span className="  flex justify-center items-center align-middle cursor-pointer w-[16px]  text-lg">
                1
              </span>
              <span className="  pr-5 flex justify-center items-center align-middle cursor-pointer w-[16px]  text-3xl">
                +
              </span>
            </div> */}
            <div className=" cursor-pointer  flex justify-center border-primaryOrange border-2 rounded-md bg-primaryOrange">
              <div className="flex justify-center items-center px-3">
                <Button
                  btnCSS={" text-white text-xl font-bold"}
                  btnName={"ADD TO CART"}
                />
                <AiOutlineShoppingCart className="text-white font-bold text-3xl" />
              </div>
            </div>
            <div className="bg-white cursor-pointer flex justify-center items-center text-primaryOrange border-solid border-primaryOrange">
              <div className="flex justify-center items-center px-3">
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
    </div>
  );
};

export default DetailProduct;
