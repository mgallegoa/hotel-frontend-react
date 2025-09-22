import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Error } from "./modules/errors/ErrorPage.tsx";
import { Guest } from "./modules/guests/pages/Guest.tsx";
import { GuestDashboard } from "./modules/guests/pages/GuestDashboard.tsx";

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
