import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Root from "./Root/Root";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetails from "./components/Home/CardDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <h1 className="text-center font-bold text-3xl ">This page not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader : ()=> fetch(`../courseCampaing.json`)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader : ()=> fetch(`../courseCampaing.json`)
      },
      {
        path:'/card-details/:id',
        element:<CardDetails></CardDetails>, 
        loader :()=> fetch(`../courseCampaing.json`),
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
