import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const FoodApp = () => {
    return(
        <>
            <Header />
            <Body />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <FoodApp />,
        errorElement: <Error />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
