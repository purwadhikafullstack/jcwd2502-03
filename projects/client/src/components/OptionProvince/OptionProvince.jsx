import React from "react";

const OptionProvince = () => {
  return (
    <>
      <label
        for="provinces"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        Province
      </label>
      <select
        id="provinces"
        className="border-[#E4E7E9] w-[200px] text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected>Select a Province</option>
        <option value="US">Jawa Barat</option>
      </select>
    </>
  );
};

export default OptionProvince;
