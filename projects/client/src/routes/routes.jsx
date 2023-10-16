import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";
import Homepage from "../pages/Homepage/Homepage";
import CardCategory from "../components/CardCategory/CardCategory";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage/CheckoutSuccessPage";
const routes = [
  <Route path="/cart" element={<CartPage />} />,
  <Route path="/" element={<Homepage />} />,
  <Route path="/c" element={<CardCategory />} />,
  <Route path="/checkout" element={<CheckoutPage />} />,
  <Route path="/success" element={<CheckoutSuccessPage />} />,
];

export default routes;
