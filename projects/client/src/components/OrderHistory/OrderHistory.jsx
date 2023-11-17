import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import OptionStatus from "../OptionStatus/OptionStatus";
import Search from "../Search/Search";
import axiosInstance from "../../config/api";
import { useDebouncedCallback, useDebounce } from "use-debounce";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UploadModal from "../UploadModal/UploadModal";
import Swal from "sweetalert2";
import "./OrderHistory.css";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:8000");

const OrderHistory = ({ tabValue, setTabValue }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [transaction_uid, setTransaction_uid] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);
  const [order, setOrder] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {

  //   socket.on('welcome', () => {
  //     console.log("connect"); // This should log "Welcome to the Socket.IO server"
  //   });

    
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const res = await axiosInstance.post("/order/order-details", {
          transaction_uid: transaction_uid,
        });
        setOrder(res.data.order);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderDetails();
  }, [transaction_uid]);

  const debouncedSearchValue = useDebouncedCallback(async (search) => {
    try {
      const filter = await axiosInstance.post(
        `/order/filter-order?status=${statusValue}&search=${
          search !== undefined ? search : ""
        }`
      );
      console.log(filter);
      setOrderHistory(filter.data.data);
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  const cancelOrder = async () => {
    try {
      const res = await axiosInstance.post("/order/cancel-order", {
        transaction_uid: transaction_uid,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const filterStatus = async (e) => {
    try {
      setStatusValue(e.target.value);

      debouncedSearchValue();
    } catch (error) {
      console.log(error);
    }
  };
  const filterSearch = async (e) => {
    try {
      debouncedSearchValue(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    debouncedSearchValue();
  }, [searchValue, statusValue]);

  const cancel = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "The order will be  canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, canceled it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelOrder();
        Swal.fire({
          title: "Cancel!",
          text: "Your order has been canceled.",
          icon: "success",
        });
        debouncedSearchValue();
      }
    });

  const refreshOrders = async () => {
    try {
      setIsRefreshing(true);
      await debouncedSearchValue();
    } catch (error) {
      console.error("Error refreshing orders:", error);
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="w-full py-[16px] px-[24px] flex justify-between items-center">
        <h1 className="text-[16px]  font-medium">ORDER HISTORY</h1>
        <div className="w-[50%]">
          <Search onChange={(e) => filterSearch(e)} />
        </div>
        <OptionStatus onChange={(e) => filterStatus(e)} />
      </div>
      <table className="w-full  ">
        <thead className="h-[38px] w-full  bg-[#F2F4F5]">
          <tr className="w-full  text-[12px] text-[#475156]">
            <th className="w-[20%] text-start pl-[24px]">ORDER ID</th>
            <th className="w-[20%] text-start">STATUS</th>
            <th className="w-[20%] text-start">DATE</th>
            <th className="w-[20%] text-start">SUB TOTAL</th>
            <th className="w-[20%]  text-start pr-[24px]">ACTION</th>
          </tr>
        </thead>
      </table>
      <div className="w-full h-[564px] overflow-auto">
        <div className="h-[38px] px-[24px] flex  justify-end items-center">
          <button
            onClick={refreshOrders}
            className="cursor-pointer  flex gap-2 justify-center items-center"
          >
            <FiRefreshCw
              className={`font-bold text-[14px] ${
                isRefreshing === true ? "spin" : ""
              }`}
            />
            <h1 className="text-[14px]">Refresh</h1>
          </button>
        </div>
        {orderHistory.length !== 0 && isRefreshing === false ? (
          <table className="w-full">
            <tbody className=" w-full ">
              {orderHistory.map((value, index) => {
                return (
                  <tr
                    key={index}
                    value={value.transaction_uid}
                    className="w-full h-[44px] text-[14px]  "
                  >
                    <td className="w-[20%] text-start pl-[24px] text-[#191C1F] ">
                      {value.transaction_uid}
                    </td>
                    <td
                      className={`w-[20%] text-start ${
                        value.status === "Payment Pending"
                          ? " text-[#FFD700]"
                          : value.status === "Waiting for Payment Approval"
                          ? "text-[#FFA500]"
                          : value.status === "Order Process"
                          ? "text-[#00BFFF]"
                          : value.status === "Package Sent"
                          ? "text-[#008000]"
                          : value.status === "Package Arrived"
                          ? "text-[#008000]"
                          : value.status === "Order Completed"
                          ? "text-[#008000]"
                          : value.status === "Order Canceled"
                          ? "text-[#FF0000]"
                          : ""
                      }`}
                    >
                      {value.status}
                    </td>
                    <td className="w-[20%] text-start text-[#5F6C72]">
                      {moment(value.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                    </td>
                    <td className="w-[20%] text-start text-[#475156] ">
                      {`${Number(value.total_price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}`}
                    </td>
                    <td className="w-[20%]   h-full ">
                      {value.status !== "Payment Pending" ? (
                        <div className="flex justify-center px-[10px]">
                          <button
                            onClick={() => {
                              navigate(
                                `/dashboard/orders/details?transaction_uid=${value.transaction_uid}`
                              );
                            }}
                            className="flex w-full  rounded-xl justify-center gap-2 items-center cursor-pointer  bg-[#2DA5F3] text-white "
                          >
                            View Details{" "}
                            {/* <HiArrowRight className="text-[14px] text-white" /> */}
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-5 px-[10px]">
                          <button
                            onClick={() => {
                              setTransaction_uid(value.transaction_uid);
                              cancel();
                            }}
                            className="w-[50%] border   rounded-xl h-full"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              setIsModalOpen(true);
                              setTransaction_uid(value.transaction_uid);
                              setOrderStatus(value.status);
                            }}
                            className=" bg-primaryOrange cursor-pointer w-[50%] rounded-xl h-full  text-white"
                          >
                            Upload
                          </button>
                          <UploadModal
                            isOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            order={order}
                            debouncedSearchValue={debouncedSearchValue}
                            orderStatus={orderStatus}
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : isRefreshing === true ? (
          <div className="flex justify-center items-center h-full">
            <FiRefreshCw className={`font-bold text-[50px] spin`} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-[px]">
              Oops! It seems there are no orders that match your search
              criteria.
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderHistory;
