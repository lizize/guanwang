import React from 'react'
import Header  from '../componets/header'
import Footer from '../componets/footer'
import { Outlet } from 'react-router'

export default function Layout() {

  return (
    <div style={{width:'100%',height:'100%'}}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
