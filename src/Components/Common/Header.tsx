export const Header = (): JSX.Element => {
    return (
        <div className="flex justify-around py-6">
            <img
                className="max-w-[32vw] md:max-w-[24vw] lg:max-w-[18vw]"
                src="mirror_logo.png"
                alt="tekong-seafood-resturant-logo"
            />
        </div>
    );
};

export default Header;
