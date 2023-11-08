import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import OptionStatus from "../OptionStatus/OptionStatus";
import Search from "../Search/Search";
import axiosInstance from "../../config/api";
import { useDebouncedCallback, useDebounce } from "use-debounce";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const OrderHistory = ({ tabValue, setTabValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);
  const navigate = useNavigate();

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
  }, 500);

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
  }, []);

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
            <th className="w-[20%] text-start">TOTAL</th>
            <th className="w-[20%]  text-start pr-[24px]">ACTION</th>
          </tr>
        </thead>
      </table>
      <div className="w-full h-[564px] overflow-auto">
        {orderHistory.length !== 0 ? (
          <table className="w-full">
            <tbody className=" w-full ">
              {orderHistory.map((value, index) => {
                console.log(value);
                return (
                  <tr key={index} className="w-full h-[44px] text-[14px]  ">
                    <td className="w-[20%] text-start pl-[24px] text-[#191C1F] ">
                      {value.transaction_uid}
                    </td>
                    <td
                      className={`w-[20%] text-start ${
                        value.status === "Payment Pending"
                          ? "text-[#FFD700]"
                          : value.status === "Waiting for Payment Approval"
                          ? "text-[#FFA500]"
                          : value.status === "Order Process"
                          ? "text-[#00BFFF]"
                          : value.status === "Package Sent"
                          ? "text-[#008000]"
                          : value.status === "Package Arrived"
                          ? "text-[#008000]"
                          : value.status === "Order Completed"
                          ? "text-[#00BFFF]"
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
                    <td className="w-[20%]  ">
                      {value.status !== "Payment Pending" ? (
                        <button
                          onClick={() => {
                            navigate(
                              `/dashboard/orders/details?transaction_uid=${value.transaction_uid}`
                            );
                            // setTabValue(7);
                          }}
                          className="flex w-full justify-start gap-3 items-center cursor-pointer  text-[#2DA5F3] "
                        >
                          View Details{" "}
                          <HiArrowRight className="text-[14px] text-[#2DA5F3]" />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            navigate(
                              `/dashboard/orders/details?transaction_uid=${value.transaction_uid}`
                            );
                            // setTabValue(7);
                          }}
                          className="flex w-full justify-start gap-3 items-center cursor-pointer  text-primaryOrange "
                        >
                          Upload Payment Proof
                          <HiArrowRight className="text-[14px] text-primaryOrange" />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
