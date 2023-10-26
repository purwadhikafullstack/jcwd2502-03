import React from "react";
import Modal from "react-modal";
const AddShippingModal = ({ isOpen }) => {
  const customStyle = {
    content: {
      width: "800px",
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
    >
      <div>
        <h1 className="text-center font-bold text-[24px] mb-[16px]">
          ADD SHIPPING ADDRESS
        </h1>
        <div className="flex gap-5 mb-[24px]">
          <form className="flex flex-col w-[50%]  ">
            <label className={`mb-[8px] `} htmlFor="">
              Fullname :
            </label>
            <input
              placeholder="Type Your Name"
              className={`border-[#E4E7E9] px-[12px] border-2 w-full  h-[44px] rounded-[4px] `}
            />
          </form>
          <form className="flex flex-col w-[50%] ">
            <label className={`mb-[8px] `} htmlFor="">
              Address :
            </label>
            <input
              placeholder="Type Your Address Details"
              className={`border-[#E4E7E9] px-[12px] border-2 w-full h-[44px] rounded-[4px] `}
            />
          </form>
        </div>
        <div className="flex gap-5">
          <div className="w-[50%]">
            <label
              for="countries"
              class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
            >
              Province
            </label>
            <select
              id="countries"
              className="border-[#E4E7E9] w-[100%] text-gray-500 rounded-[4px] h-[44px]"
            >
              <option selected>Select your Province</option>
            </select>
          </div>
          <div className="w-[50%]">
            <label
              for="countries"
              class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <select
              id="countries"
              className="border-[#E4E7E9] w-[100%] text-gray-500 rounded-[4px] h-[44px]"
            >
              <option selected>Select your city</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddShippingModal;
