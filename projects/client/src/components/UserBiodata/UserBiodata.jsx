// import { useState } from "react";
import EditUserModal from "../EditUserModal/EditUserModal";
import { useSelector } from "react-redux";

const UserBiodata = () => {
    // const [openModal, setOpenModal] = useState(false);
    const { fullname, email, avatar, status, is_verified } = useSelector(
        (state) => state.user
    );

    // const onOpenModal = () => {
    //     setOpenModal(!openModal)
    // }

    return (
        <div className="p-5 flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <img
                    className="border w-[250px] h-[250px] rounded-full mt-5"
                    src={{avatar}}
                    alt="/"
                />
                <button className="border border-black rounded-lg p-1 mt-6">
                    Edit Avatar
                </button>
            </div>
            <div className="border mt-10 h-[310px] rounded-lg">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-row">
                        <div className="mr-28 w-[200px]">Full Name</div>
                        : {fullname}
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-28 w-[200px]">Email</div>
                        <div className="">: {email}</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-28 w-[200px]">
                            Verification Status
                        </div>
                        <div>:</div>
                        <span
                            style={{
                                color:
                                    is_verified === true
                                        ? "green"
                                        : is_verified === false
                                        ? "red"
                                        : "black",
                            }}
                            className="pl-1"
                        >
                            {is_verified === true
                                ? "Verified"
                                : is_verified === false
                                ? "Not Verified"
                                : ""}
                        </span>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-28 w-[200px]">Account Status</div>
                        <div>:</div>
                        <span
                            style={{
                                color:
                                    status === "Active"
                                        ? "green"
                                        : status === "Inactive"
                                        ? "red"
                                        : "black",
                            }}
                            className="pl-1"
                        >
                            {status === "Active"
                                ? "Active"
                                : status === "Inactive"
                                ? "Inactive"
                                : ""}
                        </span>
                    </div>
                </div>
                <div className="p-5 h-[125px] flex flex-row justify-between mr-20">
                    <button className="border mt-5 ml-20 p-5 rounded-lg">
                        Change Password
                    </button>
                    <EditUserModal />
                </div>
            </div>
        </div>
    );
};

export default UserBiodata;
