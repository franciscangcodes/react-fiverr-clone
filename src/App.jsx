import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/myGigs/MyGigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'


import React from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

function App() {

  const Layout = ()=> {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
      ]
    }
  ])

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
