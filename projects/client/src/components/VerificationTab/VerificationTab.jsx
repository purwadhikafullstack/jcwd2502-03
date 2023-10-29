import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import { useEffect } from "react";

const VerificationTab = () => {
    const emailButtonHandler = async () => {
        try {
            const data = Cookies.get("user_data");
            const user = JSON.parse(data);

            const res = await axiosInstance.post(
                `/auth/resend-verification-email/:${user.id}`
            );
            setTimeout(() => {
                toast.success(res.data.message);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Toaster />
            <div className="flex flex-col text-black w-full h-[60px] justify-center border-2 bg-green-500">
                <div className="flex justify-center text-red-700 font-bold cursor-pointer">
                    Your account has not been verified!
                </div>
                <div
                    className="flex justify-center underline cursor-pointer"
                    onClick={emailButtonHandler}
                >
                    Resend verification email.
                </div>
            </div>
        </div>
    );
};

export default VerificationTab;
