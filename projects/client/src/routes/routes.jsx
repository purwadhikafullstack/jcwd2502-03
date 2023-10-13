import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";

const routes = [<Route path="/cart-detail" element={<CartPage />} />];

export default routes;
