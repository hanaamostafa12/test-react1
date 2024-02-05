import React from 'react'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Componets/Layout/Layout'
import About from './Componets/About/About';
import Portfolio from './Componets/Portfilio/Portfolio';
import Contact from './Componets/Contact/Contact';
import Home from './Componets/Home/Home';
import NotFound from './Componets/NotFound/NotFound';

let routes = createBrowserRouter(
  [{
    path: '/', element: <Layout/>,children:[
      {index:true,element: <Home/>},
      {path: "about",element: <About/>},
    {path: "portfolio",element: <Portfolio/>},
    {path: "contact",element: <Contact/>},
    {path: "*",element: <NotFound/>}
  ]
  }]
)

export default function App() {
  return <>
     <RouterProvider router={routes}> 
     </RouterProvider>
  </>

  
}
