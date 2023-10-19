import React from "react";
import { HiArrowRight } from "react-icons/hi";

const OrderHistory = ({ tabValue, setTabValue }) => {
  return (
    <>
      <div className="w-full py-[16px] px-[24px]">
        <h1 className="text-[14px] font-medium">ORDER HISTORY</h1>
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
        <table className="w-full">
          <tbody className=" w-full ">
            <tr className="w-full h-[44px] text-[14px]  ">
              <td className="w-[20%] text-start pl-[24px] text-[#191C1F]">
                #96459761
              </td>
              <td className="w-[20%] text-start text-primaryOrange">
                IN PROGRESS
              </td>
              <td className="w-[20%] text-start text-[#5F6C72]">
                Dec 30, 2019 07:52
              </td>
              <td className="w-[20%] text-start text-[#475156] ">
                $80 (5 Products)
              </td>
              <td className="w-[20%]  ">
                <button
                  onClick={() => setTabValue(7)}
                  className="flex w-full justify-start gap-3 items-center cursor-pointer  text-[#2DA5F3] "
                >
                  View Details{" "}
                  <HiArrowRight className="text-[14px] text-[#2DA5F3]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
