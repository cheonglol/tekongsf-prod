import { Button } from "primereact/button";
import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";

const componentHeaderClassname: string = "text-center mt-[6rem] mb-[4rem]";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            includesBottomNav={true}
            mainContent={
                <>
                    <hr className="my-[6rem]" />
                    {/* CONTACT US (Map & Shit Here) */}
                    <div className="min-h-[42rem]">
                        <h1 className={`${componentHeaderClassname}`}>Make a Reservation</h1>
                        <div className="md:flex md:flex-row-reverse">
                            <div className="m-0 md:m-4 md:flex-grow-[1]">
                                <h2>Address or something</h2>
                                <Button
                                    className="my-8 p-8 bg-orange-500 text-white text-[1.5rem]"
                                    onClick={() => {
                                        window.open("https://www.quandoo.sg/place/tekong-seafood-restaurant-40499");
                                    }}
                                >
                                    {`${String("Make a Reservation").toUpperCase()}`}
                                </Button>
                            </div>
                            <div className="m-0 md:m-4 md:flex-grow-[3]">
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.57717929964!2d103.9887667!3d1.3899862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf95959e509a6e27!2sTekong+Seafood+Restaurant!5e0!3m2!1sen!2sau!4v1546924456558"
                                    width="100%"
                                    height="850"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    );
};
