import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Portfolio}  from "./pages/Portfolio"
import {Service}  from "./pages/Service"
import {Movie}  from "./pages/Movie"
import AppLayout from './components/layout/AppLayout'
import { ErrorPage } from './pages/ErrorPage'

import { GetApiData } from './api/GetApiData'


const App = () => {


  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children:[
        
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/service",
          element: <Service />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData,
        },
        



      ]
    },
   

    
  ])

  return <RouterProvider router={router} />

    
  
}

export default App
