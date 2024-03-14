import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Timeline from "./components/main-components/Timeline"
import Sidebar from "./components/main-components/Sidebar"
import Trends from "./components/main-components/Trends"
import Explore from "./pages/Explore";
import ErrorPage from "./ErrorPage";

function App() {
 

  return (
    <>
      <Sidebar/>
      <div className="timeline">
        <Outlet/>
      </div>
    
      <Trends/>
    
    </>
  )
}

export default App
