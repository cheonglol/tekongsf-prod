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
          <h1>init</h1>
        </>
      }
    />
  );
};
