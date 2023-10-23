import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { login } from "../redux/Reducer/auth";
import { useEffect } from "react";

const KeepLogin = ({ children }) => {
    const userSelector = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const refresh = () => {
        const userData = Cookies.get("user_data");

        if (userData) {
            const parsedUserData = JSON.parse(userData);
            dispatch(login(parsedUserData));
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        if (!userSelector.id) {
            refresh();
        }
    }, []);

    return children;
};

export default KeepLogin;
