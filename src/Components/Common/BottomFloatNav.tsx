import { Link } from "react-router-dom";

let pathsJSON: {
    toPath: string;
    iconImageURL?: string;
    textAsIcon?: string;
}[] = [
    {
        toPath: "/",
        textAsIcon: "🏠",
    },
    {
        toPath: "/featured",
        textAsIcon: "🤩",
    },
];

export const BottomFloatNav = (): JSX.Element => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 shadow-md">
            <div className="flex justify-around py-4">
                {pathsJSON.map((element, index) => {
                    return (
                        <Link className="text-center" to={element.toPath}>
                            {!!element.iconImageURL ? (
                                <img
                                    src={element.iconImageURL}
                                    alt={`icon-${index}`}
                                    className="inline-block w-6 h-6"
                                />
                            ) : (
                                <p className="text-[1.25rem] bg-white rounded-md">{element.textAsIcon}</p>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomFloatNav;
