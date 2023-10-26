import React from "react";

const OptionCourier = ({ couriers }) => {
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
        className="border-[#E4E7E9] w-full text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected>Select a Courier</option>
        {couriers.map((value) => {
          return <option value={value.id}>{value.courier}</option>;
        })}
      </select>
    </>
  );
};

export default OptionCourier;
