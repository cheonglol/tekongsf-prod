import BottomNavigation from "../../Components/Navigational/BottomNavigation";
import { Footer } from "../../Components/Navigational/Footer";
import { HeaderNav } from "../../Components/Navigational/HeaderNav";

interface Props {
  headerContent?: any | undefined;
  mainContent: any;
  footerContent?: any;
  includesBottomNav?: boolean;
}

export const BasicLayout = ({
  headerContent,
  mainContent,
  footerContent,
  includesBottomNav,
}: Props) => {
  const defaultHeader = <HeaderNav />;
  const defaultFooter = <Footer />;

  return (
    <>
      <header className="py-4">
        {!headerContent ? defaultHeader : headerContent}
      </header>
      <main className="py-8 px-[4vw] min-h-screen ">{mainContent}</main>
      <footer>{!footerContent ? defaultFooter : footerContent}</footer>
      {includesBottomNav ? <BottomNavigation /> : ""}
    </>
  );
};
