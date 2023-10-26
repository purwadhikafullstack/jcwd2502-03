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
import { Dropdown } from "flowbite-react";
import { GoSignOut, GoStack } from "react-icons/go";
const Nav = () => {
  const [cartDrop, setCartDrop] = useState(0);
  const [cartDatas, setCartDatas] = useState([]);
  const navigate = useNavigate();

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
      const res = await axiosInstance.post("/order/cartdata");

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
  }, []);

  useEffect(() => {}, [cartDatas]);

  const subTotal = cartDatas.reduce((item, current) => {
    return Number(item) + Number(current.total);
  }, 0);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="wrap-nav w-full  bg-primaryBlue  fixed top-0 z-50">
      <div className=" my-7  h-full m-auto gap-2 sm:gap-10 flex items-center align-middle justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex rounded-md items-center  gap-4 bg-white w-[100%] relative">
          <Input
            onChange={handleChange}
            placeholder={"Search for anything..."}
            inputCSS={""}
          />
          <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute" />
        </div>

        <div className="sm:flex gap-5 hidden">
          <ul className="relative ">
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
              } w-[376px] h-[480px] bg-white  absolute right-0 rounded-xl shadow-xl`}
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
          </ul>
          <AiOutlineHeart className="text-white h-[32px] w-[32px] cursor-pointer " />
          <Link to={"/dashboard"}>
            <CiUser className="text-white h-[32px] w-[32px]" />
          </Link>
        </div>
        <div className="flex sm:hidden sm:mr-10">
          <div>
            <Dropdown
              dismissOnClick={false}
              renderTrigger={() => (
                <span>
                  <CiUser className="text-white h-[40px] w-[40px]" />
                </span>
              )}
              inline
            >
              <div className="grid gap-3 p-5 mr-8">
                <div className="flex gap-2 justify-start items-center">
                  <Dropdown.Item>
                    <GoStack className="text-black h-[32px] w-[32px] cursor-pointer" />
                  </Dropdown.Item>
                  Dashboard
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <Dropdown.Item>
                    <AiOutlineShoppingCart
                      onClick={handleCartDropDown}
                      className="text-black h-[32px] w-[32px] cursor-pointer"
                    />
                  </Dropdown.Item>
                  Shop Cart
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <Dropdown.Item>
                    <AiOutlineHeart className="text-black h-[32px] w-[32px] cursor-pointer " />
                  </Dropdown.Item>
                  Wishlist
                </div>
                <div className="flex gap-2 justify-start items-center">
                  <Dropdown.Item>
                    <GoSignOut className="text-black h-[32px] w-[32px] cursor-pointer " />
                  </Dropdown.Item>
                  Sign Out
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      {cartDrop === 1 ? <Toaster /> : <div></div>}
    </div>
  );
};

export default Nav;
