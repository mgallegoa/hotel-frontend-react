import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Error } from "./modules/errors/ErrorPage.tsx";
import { GuestDashboard } from "./modules/guests/pages/GuestDashboard.tsx";
import { CreateEditGuest } from "./modules/guests/pages/CreateEditGuest.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/guest/edit/:id",
  //   element: <CreateEditGuest guest={undefined} />,
  // },
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
        path: "guest/create",
        element: <CreateEditGuest />,
      },
      {
        path: "guest/edit/:id",
        element: <CreateEditGuest />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
