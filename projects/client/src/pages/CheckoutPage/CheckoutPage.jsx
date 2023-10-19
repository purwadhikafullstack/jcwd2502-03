import React, { useState } from "react";

//components
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import Input2 from "../../components/Input2/Input2";
import Button from "../../components/Button/Button";
import OptionCity from "../../components/OptionCity/OptionCity";
import OptionProvince from "../../components/OptionProvince/OptionProvince";
import OptionCourier from "../../components/OptionCourier/OptionCourier";
import AddressModal from "../../components/AddressModal/AddressModal";
import InputPaymentOption from "../../components/InputPaymentOption/InputPaymentOption";
import CardOrderSummary from "../../components/CardOrderSummary/CardOrderSummary";
import PlaceOrderModal from "../../components/PlaceOrderModal/PlaceOrderModal";

const CheckoutPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [placeOrderIsOpen, setPlaceOrderIsOpen] = useState(false);

  const handleConfirmChangeAddress = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <TabBar />
      <PageInfo />
      <div className="px-[300px] flex gap-5 h-full mb-[100px]">
        <div className="left-side w-[70%] h-auto">
          <h1 className="mb-[24px] text-[18px] font-medium">
            Billing Information
          </h1>
          <div className="inputs flex gap-5 w-full mb-[16px]">
            <div className="w-[50%]">
              <Input2
                type="text"
                labelName="Name"
                labelCSS="text-[14px]"
                className="w-full h-[44px]"
              />
            </div>
            <div className="w-[50%]">
              <Input2
                labelCSS="text-[14px]"
                type="text"
                labelName="Phone Number"
                className="w-full h-[44px]"
              />
            </div>
          </div>
          <div className="flex items-end  gap-2 mb-[16px]">
            <div className="w-[80%]">
              <Input2
                labelCSS="text-[14px]"
                labelName="Address"
                type="text"
                className="w-full h-[44px] "
              />
            </div>
            <div className="w-[20%] flex items-center  gap-2">
              <h1>or</h1>

              <Button
                btnCSS="text-white h-[44px] w-full rounded-[4px]"
                btnName="Choose Address"
                onClick={() => setModalIsOpen(true)}
              />
              <AddressModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                handleConfirmChangeAddress={handleConfirmChangeAddress}
                closeModal={() => setModalIsOpen(false)}
              />
            </div>
          </div>
          <div className="location w-full flex items-center mb-[24px]">
            <div className="w-[25%]">
              <OptionCity />
            </div>
            <div className="w-[25%]">
              <OptionProvince />
            </div>
            <div className="w-[25%]">
              <OptionCourier />
            </div>
            <div className="w-[25%]">
              <Input2
                className="h-[44px] "
                labelCSS="text-[14px]"
                labelName="Weight (gram)"
                type="number"
              />
            </div>
          </div>
          <div className="payment-option mb-[42px]">
            <InputPaymentOption labelName="Payment Option" />
          </div>

          <Button
            btnName="Confirm"
            btnCSS=" mb-[24px] text-white px-[72px] rounded-xl mr-[20px]"
          />
          <span className="text-[12px] text-[#5F6C72] ">
            ( "Confirm" will reveal the shipping options. )
          </span>
          <div>
            <h1 className="text-[24px] font-semibold mb-[24px]">
              Shipping Options
            </h1>
            <div className="grid grid-cols-3 gap-5">
              <div className="w-[300px] cursor-pointer border-primaryOrange text-primaryOrange flex flex-col items-center justify-center   h-[150px] border-2 rounded-xl shadow-md ">
                <h1 className="text-center text-[18px] font-medium mb-[4px]">
                  YES
                </h1>
                <h1 className="text-center text-[14px]">Yakin Esok Sampai</h1>
                <h1 className="text-center text-[12px]">
                  Estimated order arrival 2-3 days
                </h1>
              </div>
              <div className="w-[300px] cursor-pointer flex flex-col items-center justify-center   h-[150px] border-2 rounded-xl shadow-md ">
                <h1 className="text-center text-[18px] font-medium mb-[4px]">
                  YES
                </h1>
                <h1 className="text-center text-[14px]">Yakin Esok Sampai</h1>
                <h1 className="text-center text-[12px]">
                  Estimated order arrival 2-3 days
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" right-side w-[30%] h-full  px-[24px] rounded-[4px] border-[#E4E7E9] py-[20px] border-[1px]">
          <h1 className="text-[18px] font-medium mb-[20px]">Order Summary</h1>
          <CardOrderSummary />
          <CardOrderSummary />
          <div className="flex justify-between items-center text-[14px] mb-[12px]">
            <h1 className="text-[#5F6C72]">Sub-total</h1>
            <h1 className="text-[#191C1F] font-semibold">Rp. 3.000.000</h1>
          </div>
          <div className="flex justify-between items-center text-[14px] mb-[12px] ">
            <h1 className="text-[#5F6C72]">Shipping</h1>
            <h1 className="text-[#191C1F] font-semibold">Rp. 100.000</h1>
          </div>
          <div className="flex justify-between items-center text-[14px] mb-[12px]">
            <h1 className="text-[#5F6C72]">Tax(5%)</h1>
            <h1 className="text-[#191C1F] font-semibold">Rp. 150.000</h1>
          </div>
          <div className="flex justify-between font-bold   border-t-2 text-[14px] pt-[20px] mb-[32px]">
            <h1 className="text-[#191C1F] text-[16px]">Total</h1>
            <h1 className="text-[#191C1F]  text-[16px]">Rp. 3.250.000</h1>
          </div>
          <div className="w-full h-[56px]">
            <Button
              btnName="PLACE ORDER"
              btnCSS="w-full h-full text-[16px] text-white rounded-[3px]"
              onClick={() => setPlaceOrderIsOpen(true)}
            />
            <PlaceOrderModal
              isOpen={placeOrderIsOpen}
              closePlaceOrderModal={() => setPlaceOrderIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
