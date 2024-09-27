import React from 'react'
import Footer from '../footer/Footer'
import Rightbar from '../Rightbar.jsx'

function Layout({ children }) {
  return (
    <div>
      <div className="bg-main ">
        <Rightbar/>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout