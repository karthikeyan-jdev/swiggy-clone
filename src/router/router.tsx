import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favories from "../pages/Favories";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import DownloadApp from "../components/DownloadApp";

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
      {
        path: "downloadApp",
        element: <DownloadApp />,
      },
    ],
  },
]);

export default function AppProvider() {
  return <RouterProvider router={swiggyRouter} />;
}
