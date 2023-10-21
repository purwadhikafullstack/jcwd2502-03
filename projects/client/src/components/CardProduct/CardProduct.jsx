import React, { useState } from "react";
import product1 from "../../assets/product1.png";
import "./cardproduct.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import ModalShowProduct from "../ModalShowProduct/ModalShowProduct";

const CardProduct = ({ data, addToCart }) => {
  const datas = data;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    if (modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
  };

  return (
    <div className="grid grid-cols-4 justify-around bg-slate-500">
      <ModalShowProduct isOpen={modalIsOpen} />
      {datas &&
        datas.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[248px] min-w-[248px] max-h-[296px] border cursor-pointer"
            >
              <div className="p-[16px]">
                <div className="cardd">
                  <div className="">
                    <img src={product1} alt="" />
                  </div>
                  <div className="overla">
                    <div className="flex gap-2">
                      <span className="">
                        <AiOutlineHeart className="text-white bg-primaryOrange p-2 rounded-full h-[48px] w-[48px]" />
                      </span>
                      <AiOutlineShoppingCart
                        onClick={() => addToCart(item.id)}
                        className="text-black bg-white p-2 rounded-full h-[48px] w-[48px]"
                      />
                      <AiOutlineEye
                        onClick={handleModal}
                        className="text-black font-bold bg-white p-2 rounded-full h-[50px] w-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="h-[40px] max-w-[216px] overflow-hidden text-ellipsis text-sm">
                    {item.product_name}
                  </div>
                  <div className="mt-[4px] text-[#2DA5F3] font-semibold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      // minimumFractionDigits: 2
                    }).format(item.product_price)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardProduct;
