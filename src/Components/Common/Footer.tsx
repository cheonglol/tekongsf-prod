import { Button } from "primereact/button";

export const Footer = () => {
    return (
        <div className="py-[6rem] px-[8rem] text-left text-sm h-[30vh] border-t-1 border">
            <p>Tekong Seafood Restaurant 6 Changi Village Rd, Singapore 509907</p>
            <Button
                className="mt-4 shadow-md text-lg"
                onClick={() => {
                    window.open("https://www.facebook.com/tekongseafood/");
                }}
            >
                <span className="pi pi-facebook text-xl" style={{ color: "blue" }} />
            </Button>
        </div>
    );
};
