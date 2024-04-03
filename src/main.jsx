import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from "./ErrorPage.jsx";
import Explore from "./pages/Explore.jsx";
import Timeline from "./components/main-components/Timeline.jsx";
import Notifications from "./pages/Notifications.jsx";
import Messages from "./pages/Messages.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Lists from "./pages/Lists.jsx";
import Profile from "./pages/Profile.jsx";
import More from "./pages/More.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import {TweetsProvider } from "./contexts/TweetsContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/> , 
    children: [
      {
        path: "/",
        element: <Timeline/>
      },
      {
        path: "/home",
        element: <Timeline/>
      },
      {
        path: "/explore",
        element: <Explore/>
      },
      {
        path: "/notifications",
        element: <Notifications/>
      },
      {
        path: "/messages",
        element: <Messages/>
      },
      {
        path: "/bookmarks",
        element: <Bookmarks/>
      },
      {
        path: "/lists",
        element: <Lists/>
      },
      {
        path: "/profile",
        element: <UserProfile/>
      },
      {
        path: "/more",
        element: <More/>
      },
      {
        path: "/userProfile/:userId",
        element: <UserProfile/>
      }
    
    ]
  }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TweetsProvider>
     <RouterProvider router={router} />
    </TweetsProvider>
  </React.StrictMode>,
)
