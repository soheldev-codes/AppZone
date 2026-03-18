import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import NotFound from "../Components/Shared/NotFound";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        element: <h1> app Details</h1>,
      },
      {
        path: "apps/details/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
