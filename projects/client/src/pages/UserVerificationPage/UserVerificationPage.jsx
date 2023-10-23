import { useEffect, useState } from "react";
import TabBar from "../../components/TabBar/TabBar";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserVerificationPage = () => {
    const res = Cookies.get("user_data");
    const user = JSON.parse(res);
    const navigate = useNavigate();

    const [token, setToken] = useState([]);

    const getToken = async () => {
        try {
            const res = await axiosInstance.get(`/auth/verify/user-${user.id}`);
            setToken(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const verifyButtonHandler = async () => {
        try {
            const userToken = token[0].token;
            await axiosInstance.post(`/auth/verify`, {
                token: userToken,
                users_id: user.id,
            });
            toast.success("Congratulations, you have been verified!");
            Cookies.remove("user_data");
            Cookies.remove("user_token");
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            <Toaster />
            <TabBar />
            <div className="border flex flex-col bg-white w-full h-screen place-items-center pt-4">
                <div className="flex flex-col pb-2 mt-32 w-[724px] h-[250px] border-2 rounded">
                    <div className="flex flex-col items-center p-5">
                        <div className="font-bold">Token</div>
                        {token.map((row) => (
                            <div
                                className="flex border-2 border-gray-300 w-[600px] h-[50px] mt-5 rounded-lg p-3 justify-center bg-gray-300 cursor-default"
                                key={row.id}
                            >
                                {row.token}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            className="w-[200px] h-[50px] rounded-lg bg-orange-400 border border-black"
                            onClick={verifyButtonHandler}
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserVerificationPage;
