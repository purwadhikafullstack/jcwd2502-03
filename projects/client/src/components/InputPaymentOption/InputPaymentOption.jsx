import React from "react";

const InputPaymentOption = () => {
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
        className="border-[#E4E7E9] w-[200px] text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected>Select a Payment</option>
        <option value="US">United States</option>
      </select>
    </>
  );
};

export default InputPaymentOption;
