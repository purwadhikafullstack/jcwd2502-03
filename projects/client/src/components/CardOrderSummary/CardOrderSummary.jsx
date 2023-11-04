import React from "react";

const CardOrderSummary = ({ cartData }) => {
  return (
    <>
      {cartData.map((value) => {

        return (
          <div className="flex gap-2 items-center mb-[16px] w-full">
            <img
              className="w-[20%] h-[64px]  "
              src="https://media.discordapp.net/attachments/922883965667393579/1162416550112927884/Image.png?ex=65451646&is=6532a146&hm=6e86dac738717e71ac33aa3f5a7a4abe405ff2effebb4bab36370e2cd5984dfd&="
              alt=""
            />
            <div className="w-[80%]">
              <h1 className="text-[14px] ">{value.product.product_name}</h1>
              <div className="flex gap-2">
                <h1>{`${value.quantity}x`}</h1>
                <h1>{`${Number(value.product.product_price).toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                  }
                )}`}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardOrderSummary;
