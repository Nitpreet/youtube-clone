import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

function Parent() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Parent
