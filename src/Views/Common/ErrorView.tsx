import { Accordion, AccordionTab } from "primereact/accordion";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { BasicLayout } from "../../Layouts/Base/BasicLayout";
import { ThemeColorPalette } from "../../ThemeHelper";

export const ErrorView = () => {
    const redirectInMs: number = 50000;
    const routerError: any = useRouteError();

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, redirectInMs);
    });

    console.log(routerError);
    return (
        <BasicLayout
            mainContent={
                <>
                    <div className="mt-[-12rem] max-w-[80vw] mx-auto flex flex-col gap-6">
                        <div className="my-8 text-center">
                            <ProgressSpinner
                                className={`w-[8rem] h-[8rem] my-[6rem] bg-[${ThemeColorPalette.MATURE_GOLD}]`}
                            />
                            <h1 className="text-2xl font-semibold">
                                Don't worry, we'll bring you back to the homepage shortly.
                            </h1>
                            <p className="text-l my-4">
                                We're working on our site to bring you a greater experience, but unfortunately we
                                couldn't find the page you were looking for...
                            </p>
                        </div>
                        <h4 className="text-xl text-center">{routerError.status}</h4>
                        <p className="text-center opacity-65">{routerError.error.message}</p>
                        <Accordion className="mx-6">
                            <AccordionTab header="Stack Message">
                                <code>{routerError.error.stack}</code>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </>
            }
        />
    );
};
