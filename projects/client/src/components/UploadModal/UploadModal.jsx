import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import QRCode from "react-qr-code";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/api";

const UploadModal = ({ isOpen, setIsModalOpen, order }) => {
  const customStyle = {
    content: {
      width: "700px",
      height: "600px",
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

  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpen}
    >
      <div>
        <div
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer px-[24px] py-[16px] flex mb-[24px]  items-center gap-3 border-b-2"
        >
          <HiOutlineArrowSmLeft className="text-[24px]" />
          <h1>Back</h1>
        </div>
        <div
          className=""
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 200,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={
              "00020101021126680019COM.PERMATABANK.WWW011893600013160042724202120088043212300303UMI51440014ID.CO.QRIS.WWW0215ID10221527434670303UMI5204599953033605802ID5917Rafansa Oktaviano6006CIMAHI61054052162070703A016304E1BC"
            }
            viewBox={`0 0 256 256`}
          />
        </div>

        <div className="flex justify-normal gap-5 items-center mt-[24px]">
          <h1>Transaction ID :</h1>
          <h1>{order?.transaction_uid}</h1>
        </div>
        <div className="flex justify-normal gap-5 items-center mt-[24px]">
          <h1>Payment Method :</h1>
          <h1>{order?.payment_method?.method}</h1>
        </div>
        <div className="flex justify-normal gap-5 items-center mt-[24px]">
          <h1>Total Price :</h1>
          <h1>
            {`${Number(order?.total_price).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}`}
          </h1>
        </div>
        <div className="flex justify-normal gap-5 items-center mt-[24px]">
          <h1>Screenshot Payment Approval :</h1>
          <input required type="file" className="" />
        </div>
      </div>
    </Modal>
  );
};

export default UploadModal;
