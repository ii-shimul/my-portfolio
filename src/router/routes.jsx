import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
