import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'

function App() {
 let router = createBrowserRouter([
  {path:"" , element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:"*", element:<NotFound/>}
  ]}
 ])

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
