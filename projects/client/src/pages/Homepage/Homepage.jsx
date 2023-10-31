import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import Banner from "../../components/Banner/Banner";
import BestDeals from "../../components/BestDeals/BestDeals";
import ShopWithCategorys from "../../components/ShopWithCategorys/ShopWithCategorys";

const Homepage = () => {
  return (
    <>
      <div className="max-w-[1280px] m-auto ">
        {/* <TabBar /> */}
        {/* <Banner /> */}
        <BestDeals />
        <ShopWithCategorys />
      </div>
    </>
  );
};

export default Homepage;
