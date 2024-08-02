import React from 'react'
import Navbar from './Navbar'
import Foother from './Foother'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
        {children}
    <Foother/>
    </>
  )
}

export default Layout
