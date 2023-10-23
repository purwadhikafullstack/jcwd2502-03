import TabBar from "../../components/TabBar/TabBar";

const VerificationSuccessPage = () => {
    return (
        <div>
            <TabBar />
            <div className="border flex flex-col bg-white w-full h-screen place-items-center pt-4">
                <div className="flex flex-col pb-2 mt-32 w-[724px] h-[250px] border-2 rounded-xl items-center">
                    <img
                        src="https://png.pngtree.com/png-clipart/20220822/ourmid/pngtree-3d-blue-verification-icon-png-image_6120676.png"
                        className="w-[200px] h-[170px] pt-2 mt-2"
                    />
                    <div className="flex flex-col items-center p-5">
                        <div className="font-bold">
                            Congratulations, your account has been verified!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationSuccessPage;
