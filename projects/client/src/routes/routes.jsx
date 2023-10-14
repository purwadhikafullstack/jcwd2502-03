import { Route } from "react-router-dom";
import Button from "../components/Button/Button";
import Nav from "../components/Navbar/Nav";
import CartPage from "../pages/CartPage/CartPage";
import Homepage from "../pages/Homepage/Homepage";
import CardCategory from "../components/CardCategory/CardCategory";

const routes = [
<Route path="/cart-detail" element={<CartPage />} />,
<Route path="/" element={<Homepage />} />,
<Route path="/c" element={<CardCategory />} />,

];

export default routes;
