import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Page/Home/Home';




const router = createBrowserRouter([
  {
    path: "/",
   Component:Home,
   
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
