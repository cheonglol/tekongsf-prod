import BottomFloatNav from "../../Components/Common/BottomFloatNav";
import { Footer } from "../../Components/Common/Footer";
import { HeaderNav } from "../../Components/Common/HeaderNav";

interface Props {
    headerContent?: any | undefined;
    mainContent: any;
    footerContent?: any;
    includesBottomNav?: boolean;
}

export const BasicLayout = ({ headerContent, mainContent, footerContent, includesBottomNav }: Props) => {
    const defaultHeader = <HeaderNav />;
    const defaultFooter = <Footer />;

    return (
        <>
            <header className="py-4">{!headerContent ? defaultHeader : headerContent}</header>
            <main className="py-8 px-[6vw] md:px-[14vw] min-h-screen ">{mainContent}</main>
            <footer>{!footerContent ? defaultFooter : footerContent}</footer>
            {includesBottomNav ? <BottomFloatNav /> : ""}
        </>
    );
};
