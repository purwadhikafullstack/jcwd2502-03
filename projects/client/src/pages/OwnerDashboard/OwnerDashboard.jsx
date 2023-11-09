import React, { useState } from "react";
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import SideBarDashboard from "../../components/SideBarDashboard/SideBarDashboard";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import CheckoutSuccessPage from "../CheckoutSuccessPage/CheckoutSuccessPage";
import OrderViewDetails from "../../components/OrderViewDetails/OrderViewDetails";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import WarehouseList from "../../components/AdminDashboard/WarehouseList";

const OwnerDashboard = () => {
  const [tabValue, setTabValue] = useState(1);

  const onGoToDashboard = (value) => {
    setTabValue(value);
  };

  return (
    <div className="max-w-[1280px] m-auto">
      
    </div>
  );
};

export default OwnerDashboard;
