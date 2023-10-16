import React from "react";

const Input2 = (props) => {
  return (
    <form className="flex flex-col ">
      <label className={`mb-[8px] ${props.labelCSS}`}  htmlFor="">{props.labelName}</label>
      <input className={`border-[#E4E7E9] rounded-[4px] ${props.className}`}  type={props.type} />
    </form>
  );
};

export default Input2;
