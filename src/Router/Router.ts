import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

import { ErrorView } from "../Views/Common/ErrorView";
import FinancialLiteratureView from '../Views/FinancialLiteratureView';
import { LandingView } from "../Views/LandingView";
// import { ExternalReferredLoader } from "./RouteLoaders/ExternalReferredLoader";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingView,
        ErrorBoundary: ErrorView
    },
    {
        path: "/fin-lit",
        Component: () => { return FinancialLiteratureView() as JSX.Element; }
    },
    ...ProtectedRoutes.map((route: RouteObject) => {
        return route;
    }),
]);
