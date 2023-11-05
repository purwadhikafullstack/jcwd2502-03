import { useEffect, useState } from "react";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";

const UserBiodata = () => {
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const loginToken = Cookies.get("user_token");

            const user = await axiosInstance.get(
                `/auth/userdata/${loginToken}`
            );

            const dataAsArray = Array.isArray(user.data.result)
                ? user.data.result
                : [user.data.result]; // Ensure dataAsArray is an array
            console.log(dataAsArray);
            setUserData(dataAsArray);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="p-5 flex flex-col">
            {userData.map((user) => (
                <div key={user.id}>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="border w-[250px] h-[250px] rounded-full mt-5"
                            src={user.avatar}
                        />
                        <button className="border border-black rounded-lg p-1 mt-6">
                            Edit Avatar
                        </button>
                    </div>
                    <div className="border mt-10 h-[310px] rounded-lg">
                        <div className="flex flex-col gap-4 p-5">
                            <div className="flex flex-row">
                                <div className="mr-28 w-[200px]">Full Name</div>
                                <div className="">: {user.fullname}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mr-28 w-[200px]">Email</div>
                                <div className="">: {user.email}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mr-28 w-[200px]">
                                    Verification Status
                                </div>
                                <div>:</div>
                                <span
                                    style={{
                                        color:
                                            user.is_verified === true
                                                ? "green"
                                                : user.is_verified === false
                                                ? "red"
                                                : "black",
                                    }}
                                    className="pl-1"
                                >
                                    {user.is_verified === true
                                        ? "Verified"
                                        : user.is_verified === false
                                        ? "Not Verified"
                                        : ""}
                                </span>
                            </div>
                            <div className="flex flex-row">
                                <div className="mr-28 w-[200px]">
                                    Account Status
                                </div>
                                <div>:</div>
                                <span
                                    style={{
                                        color:
                                            user.status === "Active"
                                                ? "green"
                                                : user.status === "Inactive"
                                                ? "red"
                                                : "black",
                                    }}
                                    className="pl-1"
                                >
                                    {user.status === "Active"
                                        ? "Active"
                                        : user.status === "Inactive"
                                        ? "Inactive"
                                        : ""}
                                </span>
                            </div>
                        </div>
                        <div className="p-5 h-[125px] flex flex-row justify-between mr-20">
                            <button className="border mt-5 ml-20 p-5 rounded-lg">
                                Change Password
                            </button>
                            <button className="border mt-5 ml-20 p-5 rounded-lg">
                                Change Full Name
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserBiodata;
