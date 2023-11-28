import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";
import Homepage from "../pages/Homepage/Homepage";
import CardCategory from "../components/CardCategory/CardCategory";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage/CheckoutSuccessPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserDashboardPage from "../pages/UserDashboardPage/UserDashboardPage";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import UserVerificationPage from "../pages/UserVerificationPage/UserVerificationPage";
import ShopePage from "../pages/ShopPage/ShopePage";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import ChangePasswordPage from "../pages/ChangePasswordPage/ChangePasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import OrderHistory from "../components/OrderHistory/OrderHistory";

import TabBar from "../components/TabBar/TabBar";
import SideBarDashboard from "../components/SideBarDashboard/SideBarDashboard";
import { useState } from "react";
import OrderViewDetails from "../components/OrderViewDetails/OrderViewDetails";
import { useLocation } from "react-router-dom";

import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { Link } from "react-router-dom";
import WarehouseList from "../components/AdminDashboard/WarehouseListAdmin";
import SidebarAdmin from "../components/AdminDashboard/SidebarAdmin";
import DashboardAdmin from "../components/AdminDashboard/DashboardAdmin";
import UsersAdmin from "../components/AdminDashboard/UsersAdmin";
import ProductsAdmin from "../components/AdminDashboard/ProductsAdmin";
import ReportAdmin from "../components/AdminDashboard/ReportAdmin";
import CategoryAdmin from "../components/AdminDashboard/CategoryAdmin";
import UserBiodata from "../components/UserBiodata/UserBiodata";
const SideBar = ({ children }) => {
    const [tabValue, setTabValue] = useState(1);
    const location = useLocation();

    const currentPath = location.pathname;
    // console.log(currentPath);
    return (
        <div className={`max-w-[1280px] m-auto `}>
            <TabBar />
            <div className=" flex gap-[72px] h-full mb-[32px] relative">
                <SideBarDashboard
                    tabValue={tabValue}
                    setTabValue={setTabValue}
                    currentPath={currentPath}
                />
                <div
                    className={`${
                        currentPath === "/dashboard/orders/details"
                            ? "h-auto"
                            : "h-[718px]"
                    } right w-full  rounded-[4px] border-[1px] shadow-xl `}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

const SideBarAdmin = ({ children }) => {
    const [tabValue, setTabValue] = useState(1);
    const location = useLocation();

    const currentPath = location.pathname;
    // console.log(currentPath);
    return (
        <div className={`max-w-[1280px] m-auto `}>
            <TabBar />
            <div className=" flex gap-[72px] h-full mb-[32px] relative">
                <SidebarAdmin
                    tabValue={tabValue}
                    setTabValue={setTabValue}
                    currentPath={currentPath}
                />
                <div
                    className={`${
                        currentPath === "/dashboard/orders/details"
                            ? "h-auto"
                            : "h-[718px]"
                    } right w-full  rounded-[4px] border-[1px] shadow-xl `}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

const routes = [
    <Route path="/cart" element={<CartPage />} />,
    <Route path="/" element={<Homepage />} />,
    <Route path="/c" element={<CardCategory />} />,
    <Route path="/checkout" element={<CheckoutPage />} />,
    <Route path="/test" element={<CheckoutPage />} />,
    <Route path="/success" element={<CheckoutSuccessPage />} />,
    <Route path="*" element={<NotFoundPage />} />,
    <Route path="/dashboard" element={<UserDashboardPage />} />,
    <Route path="/login" element={<LoginRegisterPage />} />,
    <Route path="/verification" element={<UserVerificationPage />} />,
    <Route path="/product" element={<ShopePage />} />,
    <Route path="/product/:idProduct" element={<DetailProduct />} />,
    <Route path="/change-password" element={<ChangePasswordPage />} />,
    <Route path="/forget-password" element={<ForgetPasswordPage />} />,
    <Route path="/reset-password" element={<ResetPasswordPage />} />,
    // <Route path="/admin/warehouses" element={<WarehouseList />} />,

    // USER DASHBOARD
    <Route
        path="/dashboard/orders"
        element={
            <SideBar>
                <OrderHistory />
            </SideBar>
        }
    />,
    <Route
        path="/dashboard/orders/details"
        element={
            <SideBar>
                <OrderViewDetails />
            </SideBar>
        }
    />,
    <Route
        path="/dashboard/profile"
        element={
            <SideBar>
                <UserBiodata />
            </SideBar>
        }
    />,
    <Route path="/dashboard/wishlist" element={<SideBar>Wishlist</SideBar>} />,
    <Route
        path="/dashboard/addresses"
        element={<SideBar>Addresses</SideBar>}
    />,
    <Route path="/dashboard/settings" element={<SideBar>settings</SideBar>} />,

    // Admin Dashboard
    <Route
        path="/admin/warehouses"
        element={
            <SideBarAdmin>
                <WarehouseList />
            </SideBarAdmin>
        }
    />,
    <Route
        path="/admin/dashboard"
        element={
            <SideBarAdmin>
                <DashboardAdmin />
            </SideBarAdmin>
        }
    />,
    <Route
        path="/admin/users"
        element={
            <SideBarAdmin>
                <UsersAdmin />
            </SideBarAdmin>
        }
    />,
    <Route
        path="/admin/products"
        element={
            <SideBarAdmin>
                <ProductsAdmin />
            </SideBarAdmin>
        }
    />,
    <Route
        path="/admin/category"
        element={
            <SideBarAdmin>
                <CategoryAdmin />
            </SideBarAdmin>
        }
    />,
    <Route
        path="/admin/report"
        element={
            <SideBarAdmin>
                <ReportAdmin />
            </SideBarAdmin>
        }
    />,
];

export default routes;
