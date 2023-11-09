"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { TbBuildingWarehouse } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "../../config/api";

const NavAdmin = () => {
  const [role, setRole] = useState(null);

  const getUser = async () => {
    try {
      const data = await axiosInstance.get(
        `/auth/userdata/${Cookies.get("user_token")}`
      );
      setRole(data.data.result.role);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  let ClassName = "";
  if (role && role !== "Owner") {
    ClassName = "fixed t-0 l-0 max-w-[300px] hidden";
  }
  return (
    <div className={ClassName}>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup className=" bg-teal-400">
            <Sidebar.Item className="flex justify-start">
              <HiChartPie className="inline text-2xl mr-2" />{" "}
              <span>Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Item className="flex justify-start">
              <Link>
                <HiUser className="inline text-2xl mr-2" /> <span>Users</span>
              </Link>
            </Sidebar.Item>
            <Sidebar.Item className="flex justify-start">
              <HiShoppingBag className="inline text-2xl mr-2" />{" "}
              <span>Products</span>
            </Sidebar.Item>
            <Sidebar.Item className="flex justify-start">
              <Link to={"/admin/warehouses"}>
                <TbBuildingWarehouse className="inline text-2xl mr-2" />{" "}
                <span>Warehouses</span>
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default NavAdmin;
