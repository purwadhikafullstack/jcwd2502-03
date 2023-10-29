import React from "react";
import Input2 from "../../components/Input2/Input2";
import OptionCity from "../../components/OptionCity/OptionCity";
import OptionProvince from "../../components/OptionProvince/OptionProvince";
import OptionCourier from "../../components/OptionCourier/OptionCourier";
import AddressModal from "../../components/AddressModal/AddressModal";
import InputPaymentOption from "../../components/InputPaymentOption/InputPaymentOption";
import Button from "../Button/Button";
const BillingInformation = ({
  setModalIsOpen,
  modalIsOpen,
  handleConfirmChangeAddress,
  address,
  userData,
  couriers,
  payments,
  addresses,
  setAddress,
  setOnClick,
  onClick,
  rajaOngkir,
  setRajaOngkir,
  getAddress,
}) => {
  
  return (
    <div className="left-side  xl:w-[70%] h-auto md:w-[100%] ">
      <div className="flex items-center justify-between w-full mb-[24px] ">
        <h1 className=" text-[18px] font-medium">Billing Information</h1>
        <Button
          btnCSS="text-white h-[44px] w-[30%] rounded-[4px]"
          btnName="Add or Select"
          onClick={() => setModalIsOpen(true)}
        />
        <AddressModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          handleConfirmChangeAddress={handleConfirmChangeAddress}
          closeModal={() => setModalIsOpen(false)}
          addresses={addresses}
          setAddress={setAddress}
          setOnClick={setOnClick}
          onClick={onClick}
          userData={userData}
          rajaOngkir={rajaOngkir}
          setRajaOngkir={setRajaOngkir}
          getAddress={getAddress}
        />
      </div>
      <div className="inputs flex lg:flex-row  gap-5 w-full mb-[16px]">
        <div className="input-width1 w-[50%]">
          <Input2
            value={userData.fullname}
            type="text"
            labelName="Name"
            labelCSS="text-[14px]"
            className="w-full h-[44px]"
            disabled="disabled"
          />
        </div>
        <div className="input-width1 w-[50%]">
          <Input2
            value={userData.email}
            labelCSS="text-[14px]"
            type="text"
            labelName="Gmail"
            className="w-full h-[44px]"
            disabled="disabled"
          />
        </div>
      </div>
      <div className="flex items-end  gap-2 mb-[16px]">
        <div className="w-full">
          <Input2
            value={address.address}
            labelCSS="text-[14px]"
            labelName="Address"
            type="text"
            className="w-full h-[44px] "
            disabled="disabled"
          />
        </div>
      </div>
      <div className="location-flex w-full flex items-center mb-[24px] gap-5">
        <div className="location w-[50%]">
          <OptionCity
            valueName={address.tb_ro_city.tb_ro_province.province_name}
            valueId={address.tb_ro_city.provinces_id}
          />
        </div>
        <div className="location w-[50%]">
          <OptionProvince
            valueName={address.tb_ro_city.city_name}
            valueId={address.tb_ro_cities_id}
          />
        </div>
      </div>
      <div className="wrap-payment mb-[42px] flex gap-5 justify-between">
        <div className="payment-option ">
          <InputPaymentOption labelName="Payment Option" payments={payments} />
        </div>
        <div className="payment-option w-[25%]">
          <OptionCourier couriers={couriers} />
        </div>
        <div className="payment-option w-[25%]">
          <Input2
            className="h-[44px] "
            labelCSS="text-[14px]"
            labelName="Weight (gram)"
            type="number"
          />
        </div>
      </div>
      <div className="confirm flex items-center sm:flex-col  md:flex-row   mb-[24px]">
        <Button
          btnName="Confirm"
          btnCSS="  text-white px-[72px] btn-checkout rounded-xl mr-[20px]"
        />
        <span className="btn-text text-[12px] text-[#5F6C72] ">
          ( "Confirm" will reveal the shipping options. )
        </span>
      </div>

      <div>
        <h1 className="text-[24px] font-semibold mb-[24px] ">
          Shipping Options
        </h1>
        <div className="wrap-grid ">
          <div className="shipping  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <div className="w-[300px] cursor-pointer flex flex-col items-center justify-center   h-[150px] border-2 rounded-xl shadow-md ">
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
    </div>
  );
};

export default BillingInformation;
