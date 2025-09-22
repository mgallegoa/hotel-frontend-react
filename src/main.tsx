import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Error } from "./errors/ErrorPage.tsx";
import { Guest } from "./components/Guest.tsx";
import { GuestDashboard } from "./components/GuestDashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <GuestDashboard />,
      },
      {
        path: "guest/:id",
        element: <Guest />,
      },
    ],
    // {
    //   path: "guest/:id",
    //   element: <Guest />,
    // },
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
