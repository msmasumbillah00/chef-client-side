import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main/Main.jsx'
import Home from './pages/Home/Home.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
