import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
export default function RootLayout() {
    //Outlet is where we are opening home component,first time home will be automatically render in place of outlet afterwards which ever element we click, that will be rendered
  return (
    <div><Header />
    <Outlet />
    <Footer /></div>
  )
}
