import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {connect} from 'react-redux'

//takes in children-- curly brace to destructure from props

//wrapped in a fragment
const Layout = ({children, loggedIn}) => (
  //fragment tag
  <>
  <Navbar loggedIn={loggedIn}></Navbar>
  <div>{children}</div>
  <Footer></Footer>
  </>
)

const mapStateToProps = ({firebase}) => ({
  loggedIn: firebase.auth
})

export default connect(mapStateToProps, null)(Layout)
