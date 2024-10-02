export const Header = (): JSX.Element => {
    return (
        <div className="flex justify-around py-6">
            <img
                onClick={() => {
                    window.location.href = "/";
                }}
                className="max-w-[50vw] md:max-w-[30vw] lg:max-w-[18vw]"
                src="images/mirror_logo.png"
                alt="tekong-seafood-resturant-logo"
            />
        </div>
    );
};

export default Header;
