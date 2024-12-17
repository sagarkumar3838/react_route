import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

import React from 'react'


const AppLayout = () => {



  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
