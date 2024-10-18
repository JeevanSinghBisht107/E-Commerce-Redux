import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout";

const Home = lazy(()=> import ("../Pages/Home"));
const Cart = lazy(()=> import ("../Pages/Cart"));

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
    },
])