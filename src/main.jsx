import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Root  from './components/Root/Root';
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import InsideHome from "./components/InsideHome/InsideHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home>
          <InsideHome></InsideHome>
        </Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);