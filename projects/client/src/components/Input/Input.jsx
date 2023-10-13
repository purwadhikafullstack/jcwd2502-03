import React from "react";

const Input = ({type, placeholder, inputCSS, onChange, name, value, ref}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered w-full ${inputCSS}`}
      onChange={onChange}
      name={name}
      value={value}
      ref={ref}
    />
  );
};

export default Input;
