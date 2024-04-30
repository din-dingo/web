import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {Header} from "./components/header/Header";
import {Asteroids} from "./routes/Asteroids";
import {Destroyment} from "./routes/Destroyment";
import {Asteroid} from "./routes/Asteroid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path: "asteroids",
    element: <Asteroids/>,
  },
  {
    path: "destroyment",
    element: <Destroyment/>,
  },
  {
    path: "asteroid/:id",
    element: <Asteroid/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
