import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

import React from 'react'
import Loader from "./Loader";


const AppLayout = () => {

 const navigation = useNavigation();
 console.log(navigation);

 if(navigation.state === "loading") return <Loader/>;

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
