import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from "react-redux"
import appStore from './redux/appStore.js';
import Footer from './components/Footer.jsx';
import LoginSginUp from './components/LoginSginUp.jsx';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (

    <Provider store={appStore} >
      {
      showLogin&&<LoginSginUp setShowLogin={setShowLogin} />
      
      }
      <div className=' px-5 lg:w-[90vw] m-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <Outlet />
      </div>
      <Footer />
    </Provider>

  )
}

export default App