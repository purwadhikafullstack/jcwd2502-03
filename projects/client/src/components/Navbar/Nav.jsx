import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../config/api";
const Nav = () => {
  const [cartDrop, setCartDrop] = useState(0);
  const [cartDatas, setCartDatas] = useState([]);
  const navigate = useNavigate();
  console.log(cartDatas);
  const handleCartDropDown = () => {
    setCartDrop(!cartDrop);
  };
  const handleCheckoutNow = () => {
    navigate("/checkout");
    setCartDrop(!cartDrop);
  };
  const handleViewCart = () => {
    navigate("/cart");
    setCartDrop(!cartDrop);
  };

  const dataCart = async () => {
    try {
      const res = await axiosInstance.post("/order/dataCart", {});

      setCartDatas(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCart = async (id) => {
    console.log(id);
    try {
      const deleteCart = await axiosInstance.post("/order/delete-cart", {
        productId: id,
      });
      dataCart();
      toast.success(deleteCart.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataCart();
  }, [cartDatas]);

  const subTotal = cartDatas.reduce((item, current) => {
    return Number(item) + Number(current.total);
  }, 0);

  return (
    <div className="w-full bg-primaryBlue h-[88px] fixed top-0 z-50">
      <div className="w-[1320px] h-full m-auto flex items-center align-middle justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex rounded-md items-center gap-4 bg-white w-[50%] relative">
          <Input placeholder={"Search for anything..."} inputCSS={""} />
          <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute" />
        </div>
        <div className="flex gap-5">
          <span className="relative">
            <span className="absolute right-[-10px] px-[8px] py-[2px] top-[-5px] text-primaryBlue text-xs rounded-full bg-white ">
              {cartDatas.length}
            </span>
            <AiOutlineShoppingCart
              onClick={handleCartDropDown}
              className="text-white h-[32px] w-[32px] cursor-pointer"
            />
            {/* CART DROP */}

            <div
              className={`${
                cartDrop ? "cart-slide-in" : "cart-slide-out"
              } w-[376px] h-[480px] bg-white absolute rounded-xl shadow-xl`}
            >
              <h1 className="py-[16px] px-[24px]  ">Shopping Cart</h1>
              <div className="px-[24px] h-[220px] overflow-auto py-[20px] border-y-[2px] ">
                {cartDatas.map((value, index) => {
                  console.log(value);
                  return (
                    <div className="flex items-center gap-2 mb-[16px]">
                      <div>
                        <img className="w-[80px] h-[80px] " src="" alt="" />
                      </div>
                      <div className=" w-full flex justify-between items-center">
                        <div className="flex flex-col h-full ">
                          <h1 className="text-[14px]">
                            {value.product.product_name}
                          </h1>
                          <div className="flex gap-2 ">
                            <h1>{`${value.quantity}x `}</h1>
                            <h2 className="text-primaryBlue text-[14px]">
                              {`Rp. ${value.product.product_price}`}
                            </h2>
                          </div>
                        </div>
                        <FaTimes
                          onClick={() => handleDeleteCart(value.products_id)}
                          className="cursor-pointer text-[#929FA5] text-[16px]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between px-[24px] py-[20px]">
                <h1>Sub-total :</h1>
                <h1>{`${Number(subTotal).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`}</h1>
              </div>
              <div className="px-[24px]">
                <button
                  onClick={handleCheckoutNow}
                  className="flex gap-3 text-white items-center w-full justify-center bg-primaryOrange h-[48px] "
                >
                  CHECKOUT NOW <AiOutlineArrowRight />
                </button>
                <button
                  onClick={handleViewCart}
                  className=" my-[20px]  text-primaryOrange bg-white border-[2px] border-primaryOrange items-center w-full h-[48px]"
                >
                  VIEW CART
                </button>
              </div>
            </div>
            {/* END CART DROP */}
          </span>
          <AiOutlineHeart className="text-white h-[32px] w-[32px] cursor-pointer " />
          <Link to={"/dashboard"}>
            <CiUser className="text-white h-[32px] w-[32px]" />
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Nav;
