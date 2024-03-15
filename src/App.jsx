import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Timeline from "./components/main-components/Timeline"
import Sidebar from "./components/main-components/Sidebar"
import Explore from "./pages/Explore";
import ErrorPage from "./ErrorPage";

function App() {
 

  return (
    <>
      <Sidebar/>
      <div className="outlet">
        <Outlet/>
      </div>
    
   
    
    </>
  )
}

export default App
