import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";
import Homepage from "../pages/Homepage/Homepage";
import CardCategory from "../components/CardCategory/CardCategory";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage/CheckoutSuccessPage";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import UserVerificationPage from "../pages/UserVerificationPage/UserVerificationPage";
import VerificationSuccessPage from "../pages/VerificationSuccessPage/VerificationSuccessPage";

const routes = [
    <Route path="/cart" element={<CartPage />} />,
    <Route path="/" element={<Homepage />} />,
    <Route path="/c" element={<CardCategory />} />,
    <Route path="/checkout" element={<CheckoutPage />} />,
    <Route path="/success" element={<CheckoutSuccessPage />} />,
    <Route path="/login" element={<LoginRegisterPage />} />,
    <Route path="/verification" element={<UserVerificationPage />} />,
    <Route path="/verification-success" element={<VerificationSuccessPage />} />,
];

export default routes;
