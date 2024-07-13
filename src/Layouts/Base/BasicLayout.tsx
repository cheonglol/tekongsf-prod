import BottomFloatNav from "../../Components/Common/BottomFloatNav";
import { Footer } from "../../Components/Common/Footer";
import Header from "../../Components/Common/Header";
import { HeaderNav } from "../../Components/Common/HeaderNav";

interface Props {
    headerContent?: any | undefined;
    mainContent: any;
    footerContent?: any;
    includesBottomNav?: boolean;
}

export const BasicLayout = ({ headerContent, mainContent, footerContent, includesBottomNav }: Props) => {
    const defaultHeader = <Header />;
    const defaultFooter = <Footer />;

    return (
        <>
            <header className="py-4">{!headerContent ? defaultHeader : headerContent}</header>
            <main className="py-8 px-[6vw] md:px-[8vw] lg:px-[14vw] min-h-screen ">{mainContent}</main>
            <hr />
            <footer className="pb-[12rem] px-[6vw] md:px-[8vw] lg:px-[14vw]">
                {!footerContent ? defaultFooter : footerContent}
            </footer>
            {includesBottomNav ? <BottomFloatNav /> : ""}
        </>
    );
};
