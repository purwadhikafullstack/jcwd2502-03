import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";
import Homepage from "../pages/Homepage/Homepage";

const routes = [
<Route path="/cart-detail" element={<CartPage />} />,
<Route path="/" element={<Homepage />} />,

];

export default routes;
