import { createBrowserRouter } from "react-router-dom";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOuts></LayOuts>,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
]);