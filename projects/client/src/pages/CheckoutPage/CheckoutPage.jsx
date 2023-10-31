import React, { useEffect, useState } from "react";

//components
import TabBar from "../../components/TabBar/TabBar";
import Button from "../../components/Button/Button";
import CardOrderSummary from "../../components/CardOrderSummary/CardOrderSummary";
import PlaceOrderModal from "../../components/PlaceOrderModal/PlaceOrderModal";
import Cookies from "js-cookie";
import "./checkout.css";
import BillingInformation from "../../components/BillingInformation/BillingInformation";
import axiosInstance from "../../config/api";
import toast, { Toaster, useToaster } from "react-hot-toast";
import AddressModal from "../../components/AddressModal/AddressModal";
const CheckoutPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [placeOrderIsOpen, setPlaceOrderIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [couriers, setCouriers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [rajaOngkir, setRajaOngkir] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalWeight, setTotalWeight] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(Cookies.get("user_data"))
  );
  const [onClick, setOnClick] = useState();
  const { send } = useToaster();
  const handleConfirmChangeAddress = (value) => {
    if (!value) return toast.error("Please Select an Address");

    setModalIsOpen(false);
    setAddress(value);
    toast.success("Change Address Success");
  };

  console.log(addresses);
  console.log(address);

  const getAddress = async () => {
    try {
      const getAddress = await axiosInstance.post("/order/address");
      setAddresses(getAddress.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const primaryAddress = await axiosInstance.post(
        "/order/primary-address",
        { primary: 1 }
      );
      const getCouriers = await axiosInstance.get("/order/couriers");
      const getCart = await axiosInstance.post("/order/cartdata");
      const getPaymentMethods = await axiosInstance.get("/order/payments");
      const getROProvinces = await axiosInstance.get(
        "/order/raja-ongkir-cities"
      );
      setTotalWeight(getCart.data.totalWeight);
      setCartData(getCart.data.data);
      setRajaOngkir(getROProvinces.data.data);
      setPayments(getPaymentMethods.data.data);
      setCouriers(getCouriers.data.data);
      setAddress(primaryAddress.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getAddress();
  }, []);

  // if (!address) return <div className="mb-[100px]">Loading</div>;
  // if (addresses.length === 0) return <div className="mb-[200px]">Loading</div>;
  if (couriers.length === 0) return <div>Loading</div>;
  if (payments.length === 0) return <div>Loading</div>;

  return (
    <div className="checkout max-w-[1280px] m-auto lg:px-[100px] md:px-[50px] ">
      <TabBar />

      <div className="wrapper-checkout flex sm:flex-col md:flex-col   xl:flex-row gap-5 h-full mb-[24px] md:items-center xl:items-start">
        {address ? (
          <BillingInformation
            address={address}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
            handleConfirmChangeAddress={handleConfirmChangeAddress}
            userData={userData}
            payments={payments}
            couriers={couriers}
            addresses={addresses}
            setAddress={setAddress}
            setOnClick={setOnClick}
            onClick={onClick}
            rajaOngkir={rajaOngkir}
            setRajaOngkir={setRajaOngkir}
            getAddress={getAddress}
            cartData={cartData}
            totalWeight={totalWeight}
          />
        ) : (
          <div className="left-side  xl:w-[70%]  md:w-[100%] h-[400px] flex flex-col justify-center items-center gap-5">
            <p className="text-[24px] text-center font-semibold">
              No address found. Please add an address.
            </p>
            <Button
              btnCSS="text-white h-[44px]  px-[100px] rounded-[4px]"
              btnName="Add Address"
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
              setModalIsOpen={setModalIsOpen}
            />
          </div>
        )}

        <div className=" right-side xl:w-[30%] md:w-[50%] h-full  px-[24px] rounded-[4px] border-[#E4E7E9] py-[20px] border-[1px] ">
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
