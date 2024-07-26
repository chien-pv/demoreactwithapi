import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import UserLayout from "./components/user_layout.jsx";
import Admin from "./components/layout_admin.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "users",
        element: <h1>User management</h1>,
      },
      {
        path: "products",
        element: <h1>Product management</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
