import TabBar from "../../components/TabBar/TabBar";

const UserVerificationPage = () => {
    return (
        <div>
            <TabBar />
            <div className="border flex flex-col bg-white w-full h-screen place-items-center pt-4">
                <div className="flex flex-col pb-2 mt-32 w-[724px] h-[250px] border-2 rounded">
                    <div className="flex flex-col items-center p-5">
                        <div className="font-bold">Token</div>
                        <div className="border-2 border-gray-300 w-[600px] h-[50px] mt-5 rounded-lg"></div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="w-[200px] h-[50px] rounded-lg bg-orange-400 border border-black">
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserVerificationPage;
