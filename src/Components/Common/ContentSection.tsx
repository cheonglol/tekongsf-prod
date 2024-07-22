import React, { ReactNode } from "react";

const ContentSection = (props: { titleChi?: string; titleEng: string; content: ReactNode | JSX.Element }) => {
    return (
        <>
            <div>
                <h1 className="text-center tksf-content-heading">
                    {props.titleChi ? <span className="font-thin block my-8">{props.titleChi}</span> : null}
                    {props.titleEng ? <span>{props.titleEng.toUpperCase()}</span> : null}
                </h1>
                {props.content}
            </div>
            <hr />
        </>
    );
};

export default ContentSection;
