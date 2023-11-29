import React, { useState } from "react";
import product1 from "../../assets/product1.png";
import "./cardproduct.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AxiosInstance } from "../../config/api";
import ModalShowProduct from "../ModalShowProduct/ModalShowProduct";
// import { Button } from "flowbite-react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const CardProduct = ({ data, addToCart }) => {
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
            ? `flex flex-wrap gap-2 sm:gap-10 justify-center   sm:justify-start`
            : `flex justify-center align-middle items-center gap-5`
        }
      >
        {datas && datas.length > 0 ? (
          currentData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[160px]    sm:w-[200px] lg:w-[278px] min-w-[150px] rounded   border-2 cursor-pointer hover:shadow-lg "
              >
                <div className="p-[16px]">
                  <div className="cardd">
                    <div className="relative ">
                      <AiOutlineHeart
                        onClick={(e) => {
                          alert("Wishlist Added");
                        }}
                        className="text-black hover:text-primaryOrange absolute z-10   top-0 right-0 h-[32px] w-[32px] cursor-pointer "
                        style={{ backgroundClip: "text" }}
                      />

                      <img src={product1} className="w-full" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <Link className="" to={`/product/${item.id}`}>
                      <div className="h-[40px]  hover:underline  font-semibold overflow-hidden text-ellipsis text-sm">
                        {item.product_name}
                      </div>
                    </Link>
                    <div className="mt-[4px] text-[#2DA5F3] font-semibold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        // minimumFractionDigits: 2
                      }).format(item.product_price)}
                    </div>
                  </div>
                  {/* add to cart */}
                  {/* <div className="">
                    <Button
                      btnName={"Add To Cart"}
                      btnCSS={" w-full rounded-md mt-2"}
                    />
                  </div> */}
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
        <div className="mt-7 flex flex-wrap justify-center gap-3 mb-4 w-full">
          <button
            className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full "
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <BsArrowLeft className="font-extrabold " />
          </button>
          <div className="flex flex-wrap gap-2">
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
          <button
            className=" text-primaryOrange flex justify-center items-center p-2 w-[40px] h-[40px]  border-2 border-primaryOrange rounded-full "
            onClick={nextPage}
            disabled={endIndex >= datas.length}
          >
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
