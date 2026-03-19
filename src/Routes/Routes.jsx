import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import NotFound from "../Components/Shared/NotFound";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import AllApps from "../Pages/AllApps";
import FallBackLoader from "../Components/Shared/FallBackLoader";

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
        Component: AllApps,
        loader: async () => {
          const res = await fetch("/appfakedata.json");
          return res.json();
        },
        HydrateFallback: () => <FallBackLoader />,
      },
      {
        path: "/apps/details/:id",
        Component: AppDetails,
        loader: async () => {
          const res = await fetch("/appfakedata.json");
          return res.json();
        },
        HydrateFallback: () => <FallBackLoader />,
      },
      {
        path: "installation",
        Component: Installation,
        loader: async () => {
          const res = await fetch("/appfakedata.json");
          return res.json();
        },
        HydrateFallback: () => <FallBackLoader />,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
