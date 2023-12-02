import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../../components/Button/Button";
import CancelOrderModal from "../../components/CancelOrderModal/CancelOrderModal";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import product1 from "../../assets/product1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PageInfo from "../../components/PageInfo/PageInfo";
import TabBar from "../../components/TabBar/TabBar";
import SwiperAuto from "../../components/SwiperAuto/SwiperAuto";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Cookies from "js-cookie";
import axiosInstance from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { getCartAsync } from "./../../redux/Features/order";
const DetailProduct = () => {
  const { idProduct } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState(Cookies.get("user_token"));
  const navigate = useNavigate();
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const cartData = async () => {
  //   try {
  //     const res = await axiosInstance.post("/order/cartdata");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addToCart = async (id) => {
    try {
      if (!user) {
        toast.error("Please log in to add items to your cart.");
        navigate("/login");
      }
      const res = await axiosInstance.post("/order/cart", {
        productId: idProduct,
        quantity: quantity,
      });
      toast.success(res.data.message);
      dispatch(getCartAsync());
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   cartData();
  // }, []);

  return (
    <div className="mt-[154px] px-[300px]  rounded-sm flex justify-center mb-[100px]">
      <div className="flex  gap-10">
        <SwiperAuto />
        <div>
          <div className="text-[20px] mb-[16px] mt-[50px]">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <h1 className="text-[14px] text-[#5F6C72]">Brand :</h1>
              <h1 className="text-[14px]  font-semibold">Apple</h1>
            </div>
            <div className="flex gap-5">
              <h1 className="text-[14px] text-[#5F6C72]">Availability :</h1>
              <h1 className="text-[#2DB224] text-[14px]  font-semibold">
                In Stock
              </h1>
            </div>
          </div>
          <div className="flex gap-5">
            <h1 className="text-[14px] text-[#5F6C72]">Category :</h1>
            <h1 className="text-[14px]  font-semibold">Electronics Devices</h1>
          </div>
          <h1 className="text-[#2DA5F3] text-[20px] font-bold mt-[24px] mb-[32px]">
            Rp. 30.000.000,00
          </h1>
          <span className="text-[14px] font-medium mt-[32px] border-b-2 border-b-primaryOrange">
            DESCRIPTION
          </span>
          <p className="text-[#5F6C72] text-[14px] mt-[14px]">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
            performance of the M1 architecture to a whole new level for pro
            users.
          </p>
          <div className="w-full flex items-center  gap-10 mt-[32px]">
            <div className="flex justify-around h-[56px]  items-center gap-5  border-2 w-[25%]">
              <AiOutlineMinus
                onClick={() => handleDecrement()}
                className="cursor-pointer  text-customPrimary bg-white rounded-full text-xl"
              />
              <h1 className="font-medium border-none    text-xl">{quantity}</h1>
              <AiOutlinePlus
                onClick={() => handleIncrement()}
                className="cursor-pointer text-customPrimary bg-white rounded-full text-xl "
              />
            </div>
            <button
              onClick={() => addToCart()}
              className="w-[75%] flex items-center justify-center gap-5 font-bold text-[16px] text-white h-[56px] bg-primaryOrange"
            >
              ADD TO CART <AiOutlineShoppingCart className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
