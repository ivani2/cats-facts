import { createBrowserRouter } from "react-router-dom";
import CatHomePage from '../catfacts/pages/CatHomePage';
import { ErrorPage } from "../shared/components/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <CatHomePage />,
        errorElement: <ErrorPage />,
    }
]

);
