import axios from "axios";
import React, { useEffect, useState } from "react";
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import Input from "../../components/Input/Input";
import { BiSearch } from "react-icons/bi";
import { useLocation, useSearchParams } from "react-router-dom";

const ShopePage = () => {
  const [kategori, setKategori] = useState(null);
  const [datas, setDatas] = useState(null);
  const param = useLocation();
  const [currentCategory, setCurrentCategory] = useState(
    new URLSearchParams(param.search).get("categori")
  );

  console.log(currentCategory);
  const getKategori = async () => {
    try {
      const res = await axios.get("http://localhost:8000/product/kategori");
      setKategori(res.data);
      //   console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8000/product");
      setDatas(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKategori();
    getProduct();
  }, []);

  return (
    <div>
      <TabBar />
      <PageInfo />
      <div className="grid grid-flow-col gap-[24px] my-[40px]">
        {/* sidebar filter start */}
        <div className="flex gap-5">
          <div className="">
            <select className="select select-bordered w-full max-w-[312px]" >
              <option disabled >
                Pick Kategori
              </option>
              {kategori &&
                kategori.map((item, index) => {
                  return (
                    <option key={index} value={item.id} >
                      {item.category}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex rounded-md items-center gap-4 bg-white w-[50%] relative">
            <Input placeholder={"Search Product..."} inputCSS={""} />
            <BiSearch className="text-black right-2 cursor-pointer h-[32px] w-[32px] absolute" />
          </div>
          <div className="">
            <select className="select select-bordered w-full max-w-[312px]">
              <option disabled selected>
                Sort Price By
              </option>
              <option value="DESC">Tinggi Ke Rendah</option>
              <option value="ASC">Rendah Ke Tinggi</option>
            </select>
          </div>
        </div>
        {/* sidebar filter end */}

        {/* main shop start */}
        <div className=""></div>
        {/* main shop end */}
      </div>
    </div>
  );
};

export default ShopePage;
