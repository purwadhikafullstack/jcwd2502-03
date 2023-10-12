import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = process.env.API_URL || "http://localhost:5000";

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.request.use((config) => {
    const userToken = Cookies.get("user_token");
    if (userToken) {
        config.headers.authorization = userToken || "";
    }

    return config;
});

export default axiosInstance;