import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'

function AdminLayOut() {
  return (
    <>
        <Dashboard/>
        <Outlet/>
    </>
  )
}

export default AdminLayOut