import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const swiggyRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<Home/>
        }]
    }
])

export default function AppProvider(){
    return <RouterProvider router={swiggyRouter}/>
}