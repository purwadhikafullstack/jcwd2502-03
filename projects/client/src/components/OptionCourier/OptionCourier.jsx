import React from "react";

const OptionCourier = () => {
  return (
    <>
      <label
        for="courier"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        Courier
      </label>
      <select
        id="courier"
        className="border-[#E4E7E9] w-[200px] text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected>Select a Courier</option>
        <option value="US">JNE</option>
      </select>
    </>
  );
};

export default OptionCourier;
