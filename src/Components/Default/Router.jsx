import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
