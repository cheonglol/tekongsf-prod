import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            includesBottomNav={true}
            mainContent={
                <>
                    <hr className="my-10" />
                    {/* CONTACT US (Map & Shit Here) */}
                    <div className="bg-red-700 min-h-[42rem]">
                        <h1></h1>
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.57717929964!2d103.9887667!3d1.3899862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf95959e509a6e27!2sTekong+Seafood+Restaurant!5e0!3m2!1sen!2sau!4v1546924456558"
                            width="100%"
                            height="850"
                            allowFullScreen
                        />
                    </div>
                </>
            }
        />
    );
};
