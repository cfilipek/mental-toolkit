import React from 'react'

import Navbar from '../components/Navbar'

//takes in children-- curly brace to destructure from props

//wrapped in a fragment
const Layout = ({children}) => (
  <>
  <Navbar></Navbar>
  <div>{children}</div>
  </>
)

export default Layout
