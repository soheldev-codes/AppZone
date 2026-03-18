import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h1>404 page</h1>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        element: <h1> apps</h1>,
      },
      {
        path: "installation",
        element: <h1>installation</h1>,
      },
    ],
  },
]);
