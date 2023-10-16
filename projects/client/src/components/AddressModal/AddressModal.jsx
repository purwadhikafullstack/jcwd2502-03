import React, { useState } from "react";
import Modal from "react-modal";
//Components
import Button from "../Button/Button";
import EditAddressModal from "../EditAddressModal/EditAddressModal";

import { AiFillCloseCircle } from "react-icons/ai";

const AddressModal = ({
  isOpen,
  onRequestClose,
  handleConfirmChangeAddress,
  closeModal,
}) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const handleEditConfirm = () => {
    setEditModalIsOpen(false);
  };
  const customStyle = {
    content: {
      width: "500px",
      height: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      z: "50",
    },
  };
  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[900] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
    >
      <div className=" h-full   relative">
        <div className="flex justify-between items-top">
          <h1 className="text-[18px] font-semibold mb-[24px]">
            Shipping Address
          </h1>
          <AiFillCloseCircle
            className="text-[24px] cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className=" h-[430px] overflow-auto">
          <div className="w-full border-primaryOrange h-auto border-[1px] rounded-[12px] px-[12px] py-[10px] mb-[24px]">
            <h1 className="text-[16px]  font-semibold">Primary</h1>
            <h1 className="text-[16px] font-semibold">Address :</h1>
            <h1 className="text-[14px]">
              456 Jalan Jenderal Sudirman City: Kota Anyar Country: Indonesia
              ZIP Code: 67890
            </h1>
          </div>
        </div>
        <div className="flex w-full gap-5 absolute bottom-0">
          <div className="w-[50%]">
            <Button
              btnName="Edit"
              btnCSS="w-full rounded-[16px] bg-white border-[1px] border-primaryOrange text-primaryOrange"
              onClick={() => setEditModalIsOpen(true)}
            />
            <EditAddressModal
              isOpen={editModalIsOpen}
              handleEditConfirm={handleEditConfirm}
              cancelEdit={() => setEditModalIsOpen(false)}
            />
          </div>
          <div className="w-[50%]">
            <Button
              btnName="Confirm"
              btnCSS="w-full text-white rounded-[16px] h-[42px]"
              onClick={() => handleConfirmChangeAddress()}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddressModal;
