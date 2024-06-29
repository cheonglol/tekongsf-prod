/* eslint-disable jsx-a11y/alt-text */

import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";
import FeaturedVerticalSlideTemplate, {
    FeaturedVerticalSlideProps,
} from "../Components/FeaturedVerticalSlide/FeaturedVerticalSlide";

export const FinancialLiteratureView = () => {
    const [contentArr, setContentArr] = useState<FeaturedVerticalSlideProps[] | undefined>(undefined);

    useEffect(() => {
        if (!!contentArr) setContentArr(undefined);
        if (!contentArr) {
        }
    }, [contentArr]);

    if (!!contentArr) {
        return (
            <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
                {contentArr.map((element) => {
                    return (
                        <FeaturedVerticalSlideTemplate
                            backgroundImageURL={element.backgroundImageURL}
                            imageURL={element.imageURL}
                            title={element.title}
                            description={element.description}
                            endText={element.endText}
                        />
                    );
                })}
            </div>
        );
    } else {
        return <Skeleton animation="wave" height="90vh" />;
    }
};

export default FinancialLiteratureView;
