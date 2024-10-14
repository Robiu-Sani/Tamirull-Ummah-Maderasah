import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Notice/Notice";
import About from "../Pages/about/About";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "notice/:id",
        element: <Notice />,
      },
    ],
  },
]);
