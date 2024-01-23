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
import ChefRecipies from './pages/ChefRecipies/ChefRecipies.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Blog from './pages/Blog/Blog.jsx'


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
        path: "/chef_recipes/:chefId",
        element: <ChefRecipies></ChefRecipies>,
        loader: ({ params }) => fetch(`http://localhost:3000/chef_recipes/${params.chefId}`)
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
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
