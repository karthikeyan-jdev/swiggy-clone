import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favories from "../pages/Favories";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import AboutUs from "../pages/AboutUs";

const swiggyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Favories",
        element: <Favories />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Signin",
        element: <Signin />,
      },
    ],
  },
]);

export default function AppProvider() {
  return <RouterProvider router={swiggyRouter} />;
}
