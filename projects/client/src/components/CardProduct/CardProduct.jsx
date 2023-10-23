import React, { useState } from "react";
import product1 from "../../assets/product1.png";
import "./cardproduct.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import ModalShowProduct from "../ModalShowProduct/ModalShowProduct";

const CardProduct = ({ data }) => {
  const datas = data;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleModal = () => {
    if (modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = datas?.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < datas.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div
      className={
        datas && datas.length > 0
          ? `grid grid-cols-5  gap-5`
          : `grid justify-center items-center gap-5`
      }
    >
      <ModalShowProduct isOpen={modalIsOpen} />
      {datas && datas.length > 0 ? (
        currentData.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[248px] min-w-[248px] max-h-[296px] border-2 cursor-pointer"
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
                      <AiOutlineShoppingCart className="text-black bg-white p-2 rounded-full h-[48px] w-[48px]" />
                      <AiOutlineEye
                        onClick={handleModal}
                        className="text-black font-bold bg-white p-2 rounded-full h-[50px] w-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="h-[40px] max-w-[216px] font-semibold overflow-hidden text-ellipsis text-sm">
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
        })
      ) : (
        <div className=" text-center m-auto ">
          <h2 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h2>
          <p className="text-gray-600">
            Maaf, produk yang Anda cari tidak tersedia dalam kategori ini.
          </p>
        </div>
      )}

    </div>
    {datas && datas.length > itemsPerPage - 1 ? (
        <div className="mt-7 flex justify-center gap-3 mb-4 w-full">
          <button className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full " onClick={prevPage} disabled={currentPage === 1}>
            <BsArrowLeft className="font-extrabold " />
          </button>
          <div className="flex gap-2">
            {Array.from(
              { length: Math.ceil(datas.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-[40px] h-[40px] flex items-center justify-center border-2 rounded ${
                    currentPage === i + 1 ? "bg-primaryOrange text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <button className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full " onClick={nextPage} disabled={endIndex >= datas.length}>
            <BsArrowRight className="font-extrabold " />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardProduct;
