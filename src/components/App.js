import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
// import About from "./About";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(() => import("./About"));
const Grocery = lazy(() => import("./Grocery") );

const FoodApp = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <FoodApp />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>),
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
