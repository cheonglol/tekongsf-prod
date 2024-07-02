export const Header = (): JSX.Element => {
    return (
        <div className="flex justify-around py-6">
            <img
                className="max-w-[28vw] md:max-w-[20vw] lg:max-w-[14vw]"
                src="mirror_logo.png"
                alt="tekong-seafood-resturant-logo"
            />
        </div>
    );
};

export default Header;
