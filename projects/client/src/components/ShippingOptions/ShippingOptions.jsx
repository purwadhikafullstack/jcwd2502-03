import React, { useState } from "react";

const ShippingOptions = ({ shippingOptions }) => {
  const [changeColor, setChangeColor] = useState();
  return (
    <>
      {shippingOptions.map((value, index) => {
        return (
          <div key={index}>
            <div className="mb-[24px] flex justify-between items-center ">
              <h1 className="text-[24px] font-semibold  ">Shipping Options</h1>
              <h1 className="text-[24px] font-bold">
                {value.code.toUpperCase()}
              </h1>
            </div>
            <div className="wrap-grid ">
              <div className="shipping  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {value.costs.map((item, index) => {
                  return (
                    <div
                      onClick={() => setChangeColor(item.service)}
                      key={index}
                      className={`w-[300px] ${
                        changeColor === item.service
                          ? "border-primaryOrange"
                          : ""
                      } cursor-pointer hover:border-primaryOrange text-primaryOrange flex flex-col items-center justify-center   h-[150px] border-2 rounded-xl shadow-md`}
                    >
                      <h1 className="text-center text-[18px] font-medium mb-[4px]">
                        {item.service}
                      </h1>
                      <h1 className="text-center text-[14px]">
                        {item.description}
                      </h1>
                      <h1 className="text-center text-[12px]">
                        {`Estimated order arrival ${item.cost[0].etd
                          .split("HARI")
                          .join("")} days `}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShippingOptions;
