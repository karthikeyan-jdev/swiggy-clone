import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import Cart from "../pages/Cart.tsx";
import Favories from "../pages/Favories.tsx";
import Login from "../pages/Login.tsx";
import Signin from "../pages/Signin.tsx";
import AboutUs from "../pages/AboutUs.tsx";

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
