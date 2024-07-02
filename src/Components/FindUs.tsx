import { Button } from "primereact/button";
import { contentSectionHeader } from "../Constants/CustomTailwindClassnames";

const FindUs = () => {
    return (
        <div className="min-h-[42rem]">
            <h1 className={`${contentSectionHeader}`}>Find Us</h1>
            <div className="md:flex md:flex-row-reverse">
                <div className="md:m-4 md:flex-grow-[1] text-center md:text-left space-y-4">
                    <h1>Opens Daily</h1>
                    <p>Opening & Closing Hours</p>
                    <ul className="list md:ml-4">
                        <li>11:30 AM to 2:30 PM</li>
                        <li>05:00 PM to 11:00 PM</li>
                    </ul>
                    <Button
                        icon={<span className="pi pi-bell text-[1.5rem] mr-4"></span>}
                        className="p-6 bg-orange-500 text-white text-[1.5rem]"
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
    );
};

export default FindUs;
