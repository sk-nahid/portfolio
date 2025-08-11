import { createBrowserRouter } from "react-router-dom";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home";
import ProjectDetails from "../Components/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOuts></LayOuts>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/project/:id",
                Component:ProjectDetails,
            }
        ]
    },
]);