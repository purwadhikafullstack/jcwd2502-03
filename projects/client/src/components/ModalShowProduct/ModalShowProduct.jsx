import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import CancelOrderModal from "../CancelOrderModal/CancelOrderModal";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import product1 from "../../assets/product1.png";

const ModalShowProduct = ({ isOpen }) => {
  console.log(isOpen);
  const [isOpened, setIsOpened] = useState(isOpen);
  const navigate = useNavigate();
  const customStyle = {
    content: {
      width: "1400px",
      height: "754px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      z: "50",
      paddingRight: "24px",
    },
  };
  const handleClose = () => {
    isOpen = false;
    setIsOpened(false);
  };
  useEffect(() => {
    setIsOpened(isOpen);
  }, [isOpen]);
  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpened}
    >
      <button
        className="absolute cursor-pointer rounded-full text-lg font-bold top-2 right-2 px-2 text-gray-600 hover:text-black"
        onClick={handleClose}
      >
        X
      </button>

      <div className="relative h-full w-full flex">
        <div className="grid gap-[24px]">
          <div className="border">
            <img className="w-[616px] h-[464px]" src={product1} alt="" />
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
        <div className="">
          <div>Asus ROG Phone 5s 12/256</div>
          <div>DESKRIPSI</div>
          <div>
            Asus Rog phone 3 8/128GB 12/128 12/256GB FULLSETT TAM : FULLSET
            DENGAN ACC DAN BOX ORIGINAL UNIT ONLY : SECOND BATANGAN TIDAK
            TERMASUK ACC DAN BOX Asus Rog Phone 2 8/128GB 12/256GB FULLSETT TAM
            : FULLSET DENGAN ACC DAN BOX ORIGINAL ( 90% -95% unit second tidak
            mulus 100% ) UNIT ONLY : SECOND BATANGAN TIDAK TERMASUK ACC DAN BOX
            GARANSI TOKO 30 HARI UNTUK VARIAN SECOND FULLSET TAM , ( di luar
            human eror
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalShowProduct;
