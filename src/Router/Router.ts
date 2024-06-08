import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

import { ErrorView } from "../Views/Common/ErrorView";
import FeaturedVerticalSlideView from '../Views/FeaturedVerticalSlide';
import { LandingView } from "../Views/LandingView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/featured",
        Component: () => { return FeaturedVerticalSlideView() as JSX.Element; }
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
