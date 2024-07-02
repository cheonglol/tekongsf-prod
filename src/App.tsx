import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./Router/Router";
// import reportWebVitals from "./reportWebVitals";

// ### PRIMEREACT CSS ###
import "primeicons/primeicons.css";
import "primereact/resources/themes/viva-light/theme.css";

interface Props {
    children?: any;
}

function App({ children }: Props) {
    return (
        <>
            {/* <ReduxStoreProvider store={store}> */}
            <RouterProvider router={router} />
            <PrimeReactProvider>{children}</PrimeReactProvider>
            {/* </ReduxStoreProvider> */}
        </>
    );
}

export default App;
