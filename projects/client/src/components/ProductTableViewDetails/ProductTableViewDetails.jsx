import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

const ProductTableViewDetails = () => {
  return (
    <table className="w-full   ">
      <thead className="text-[12px]  bg-[#F2F4F5] h-[38px] text-[#475156] ">
        <tr>
          <th className="w-[40%] px-[20px] text-left">PRODUCTS</th>
          <th className="w-[10%]">PRICE</th>
          <th className="w-[10%]">QUANTITY</th>
          <th className="w-[10%]">SUB-TOTAL</th>
        </tr>
      </thead>
      <tbody className="border-b-2">
        <tr className="text-[#191C1F]   text-[14px]">
          <td className="flex items-center pl-[24px] gap-4 py-[20px]">
            <img
              className="w-[72px] h-[72px]"
              src="https://media.discordapp.net/attachments/922883965667393579/1162416550112927884/Image.png?ex=653bdbc6&is=652966c6&hm=96102a8c73caa2871b949198b8749ef98e5e26bc1afcb8f2f2493d65f7dab1f0&="
              alt=""
            />
            <h1 className="PRODUCTS ">
              Wired Over-Ear Gaming Headphones with USB{" "}
            </h1>
          </td>
          <td className="PRICE  py-[20px]">Rp. 2.000.000</td>
          <td className="QUANTITY py-[20px]  text-center  ">1</td>
          <td className="TOTAL py-[20px]">Rp. 2.000.000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTableViewDetails;
