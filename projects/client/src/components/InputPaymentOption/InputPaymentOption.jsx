import React from "react";

const InputPaymentOption = ({ payments }) => {
  return (
    <>
      <label
        for="countries"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        Payment Option
      </label>
      <select
        id="countries"
        className="border-[#E4E7E9] w-full text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected>Select a Payment</option>
        {payments.map((value) => {
          return (
            <>
              <option value={value.id}>{value.method}</option>
            </>
          );
        })}
      </select>
    </>
  );
};

export default InputPaymentOption;
