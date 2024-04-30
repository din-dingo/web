import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Route1 from "./routes/route1";
import Route2 from "./routes/route2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "route1",
    element: <Route1 />,
  },
  {
    path: "route2",
    element: <Route2 />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
