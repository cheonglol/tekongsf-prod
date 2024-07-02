import { Button } from "primereact/button";
import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { contentSectionHeader } from "../Constants/CustomTailwindClassnames";
import { AboutUs } from "../Components/AboutUs";
import FindUs from "../Components/FindUs";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            includesBottomNav={true}
            mainContent={
                <>
                    {/* ABOUT US */}
                    <div className="my-[6rem]">
                        <AboutUs />
                    </div>
                    <hr className="my-[6rem]" />
                    {/* CONTACT US (Map & Shit Here) */}
                    <FindUs />
                </>
            }
        />
    );
};
