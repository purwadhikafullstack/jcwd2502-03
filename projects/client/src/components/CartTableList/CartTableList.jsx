import React, { useEffect, useState } from "react";

import { RiDeleteBin5Line } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
const CartTableList = ({
  cartDatas,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDeleteCart
}) => {
  return (
    <table className="w-full   ">
      <thead className="text-[12px]  bg-[#F2F4F5] h-[38px] text-[#475156] ">
        <tr>
          <th className="w-[50%] px-[20px] text-left">PRODUCTS</th>
          <th className="w-[10%]">PRICE</th>
          <th className="w-[10%]">QUANTITY</th>
          <th className="w-[10%]">SUB-TOTAL</th>
        </tr>
      </thead>
      <tbody className="border-b-2">
        {cartDatas.map((value, index) => {
          return (
            <tr key={index} className="text-[#191C1F]  text-[14px]">
              <td className="flex items-center pl-[24px] gap-4 py-[20px]">
                <RiDeleteBin5Line
                  onClick={() => handleDeleteCart(value.products_id)}
                  className="text-red-600 text-[24px] cursor-pointer"
                />
                <img
                  className="w-[72px] h-[72px]"
                  src="https://media.discordapp.net/attachments/922883965667393579/1162416550112927884/Image.png?ex=653bdbc6&is=652966c6&hm=96102a8c73caa2871b949198b8749ef98e5e26bc1afcb8f2f2493d65f7dab1f0&="
                  alt=""
                />
                <h1 className="PRODUCTS">{value.product.product_name}</h1>
              </td>
              <td className="PRICE py-[20px]">{`Rp. ${value.product.product_price}`}</td>
              <td className="QUANTITY py-[20px] flex gap-4  items-center justify-center">
                <HiMinus
                  onClick={() => handleDecreaseQuantity(value.products_id)}
                  className="cursor-pointer border-[1px] border-gray-400 text-customPrimary bg-white rounded-full text-xl"
                />
                <h1 className="font-medium border-none    text-xl">
                  {value.quantity}
                </h1>
                <HiPlus
                  onClick={() =>
                    handleIncreaseQuantity(value.products_id, value.quantity)
                  }
                  className="cursor-pointer border-[1px] border-gray-400 text-customPrimary bg-white rounded-full text-xl"
                />
              </td>
              <td className="TOTAL py-[20px] font-semibold">{`Rp. ${value.product.product_price}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTableList;
