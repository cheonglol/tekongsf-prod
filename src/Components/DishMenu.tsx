import { useEffect, useState } from "react";
import { centerEverythinWithin } from "../Constants/CustomTailwindClassnames";
import { ProgressSpinner } from "primereact/progressspinner";

const DishMenu = () => {
    const [menuData, setMenuData] = useState<undefined | object[]>(undefined);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            const response = await fetch("data/menu.json");
            console.log(response);
            const menuJson = await response.json();

            setMenuData(menuJson);
        } catch (error) {
            console.log(error);
        }
    };

    if (!menuData)
        return (
            <div className={`${centerEverythinWithin}`}>
                <ProgressSpinner />
            </div>
        );

    return (
        <div className="">
            {Object.entries(menuData).map(([category, dishes]) => (
                <div
                    className="border-l-2 border-[#c8b33b] h-fit p-8 mb-[6rem] m-auto w-[90vw] md:w-[60vw] lg:[20vw]"
                    key={category}
                >
                    <div className="mb-6 font-medium">
                        <h1 className="border-b pb-4 font-medium">
                            {category.split(" | ")[0]}
                            <br />
                            {category.split(" | ")[1].toUpperCase()}
                        </h1>
                    </div>
                    <div>
                        {(dishes as []).map((dish: any, index: number) => (
                            <div className="my-[4rem]" key={index}>
                                <h2 className="font-medium">
                                    {dish.chineseDishName} - {dish.englishDishName}
                                </h2>
                                <p className="font-mono">{dish.pricing}</p>
                                <p>{dish.isAdvancedOrder ? "(Advanced order)" : ""}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DishMenu;
