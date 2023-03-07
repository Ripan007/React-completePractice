import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Root } from "./pages/Root";

import { RootLayout } from "./pages/Root";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
