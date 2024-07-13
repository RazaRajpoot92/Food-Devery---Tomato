import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import MobilePage from './pages/MobilePage.jsx'
import Menu from './pages/Menu.jsx'
import CartPage from './pages/CartPage.jsx'

const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },{
        path:'/menu',
        element:<Menu />
      },
      {
        path:'/mobile-app',
        element:<MobilePage />
      },
      {
        path:"/contact-us",
        element:<ContactUs />
      },
      {
        path:"/cart",
        element:<CartPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>,
)
