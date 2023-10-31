import TabBar from "../../components/TabBar/TabBar";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserVerificationPage = () => {
    const navigate = useNavigate();

    const verifyButtonHandler = async () => {
        try {
            const loginToken = Cookies.get("user_token");

            const userData = await axiosInstance.get(
                `/auth/userdata/${loginToken}`
            );

            const verifyToken = await axiosInstance.get(`/auth/verify/user-${userData.data.result.id}`)

            await axiosInstance.post(`/auth/verify`, {
                token: verifyToken,
                users_id: userData.data.result.id,
            });
            toast.success("Congratulations, you have been verified!");
            Cookies.remove("user_token");
            setTimeout(() => {
                navigate("/verification-success");
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Toaster />
            <TabBar />
            <div className="border flex flex-col bg-white w-full h-screen place-items-center pt-4">
                <div className="flex flex-col pb-2 mt-32 w-[724px] h-[170px] border-2 rounded">
                    <div className="flex flex-col items-center p-5">
                        <div className="font-bold">
                            Click "Verify" Button to verify your account!
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            className="w-[200px] h-[50px] rounded-lg bg-orange-400 border border-black font-bold"
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
