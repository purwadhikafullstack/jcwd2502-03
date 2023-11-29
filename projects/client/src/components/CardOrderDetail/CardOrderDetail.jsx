import React from "react";

const CardOrderDetail = ({ ordersDetails }) => {
  if (ordersDetails.length === 0) {
    return <div>Loading</div>;
  }

  console.log(ordersDetails);
  return (
    <>
      {ordersDetails.map((value, index) => {


        return (
          <div
            key={index}
            className="flex gap-2 items-center mb-[16px] w-full "
          >
            <img
              className="w-[30%] h-[84px]  "
              src="https://media.discordapp.net/attachments/922883965667393579/1162416550112927884/Image.png?ex=65451646&is=6532a146&hm=6e86dac738717e71ac33aa3f5a7a4abe405ff2effebb4bab36370e2cd5984dfd&="
              alt=""
            />
            <div className="w-[70%]">
              <h1 className="text-[14px] ">{value?.product?.product_name}</h1>
              <div className="flex gap-2 justify-between">
                <h1>{`${value?.quantity}x`}</h1>
                <div className="flex gap-3">
                  <h1>Stocks :</h1>
                  <h1>{value?.product?.products_stocks[0]?.stock}</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardOrderDetail;
