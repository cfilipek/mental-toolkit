import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

//takes in children-- curly brace to destructure from props

//wrapped in a fragment
const Layout = ({children}) => (
  <>
  <Navbar></Navbar>
  <div>{children}</div>
  <Footer></Footer>
  </>
)

export default Layout
