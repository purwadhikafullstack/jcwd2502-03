import React, { useState } from "react";
import Products from "./ComponentAdmin/Products";
import Category from "./ComponentAdmin/Category";
import { Link } from "react-router-dom";

const CategoryAdmin = () => {
  const [component, setComponent] = useState(0);

  
  return (
    <>
      <div className="grid grid-cols-2 gap-5 w-full ">
        <span
          className={
            component == 1
              ? `bg-primaryOrange flex p-3 justify-center`
              : `flex p-3  justify-center`
          }
        >
          <button
            className="hover:text-primaryBlue font-medium"
            onClick={() => {
              setComponent(1);
            }}
          >
            <Link to={"/admin/products"}>Products</Link>
          </button>
        </span>
        <span
          className={
            component != 1
              ? `bg-primaryOrange flex p-3 justify-center`
              : `flex p-3 justify-center`
          }
        >
          <button
            className="hover:text-primaryBlue font-medium"
            onClick={() => {
              setComponent(0);
            }}
          >
            <Link to={"/admin/category"}>Categories</Link>
          </button>
        </span>
      </div>
      {component == 1 ? <Products /> : <Category />}
    </>
  );
};

export default CategoryAdmin;
