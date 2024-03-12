import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./components/Payment.jsx";
import Order from "./components/Order.jsx";
import CreateProfile from "./components/CreateProfile.jsx";
import Username from "./components/Username.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/createprofile",
    element: <CreateProfile />,
  },
  {
    path: "/username",
    element: <Username />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
