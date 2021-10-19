/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props =>(
        <div>
            <div className="container">
              <Header {...props}/>
              <div className="main">
                <Route/>
              </div>
            </div>
            <Footer/>
        </div>
      )}/>


    </BrowserRouter>
  )
}

export default Layout
