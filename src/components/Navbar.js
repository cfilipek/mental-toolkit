import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

//fixed navbar
//hover border-bottom 2px solid white


const Nav = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="blue-nav"
      >
        <Navbar.Brand>
          <NavLink to="/">
            <img src="https://i.imgur.com/b8coz0D.png" alt="logo"/>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navbar.Text className="margin-right-nav-emergency">
            <NavLink>
              Emergency Resources
            </NavLink>
          </Navbar.Text>
          <Navbar.Text className="margin-right-nav">
            <NavLink>
              About
            </NavLink>
          </Navbar.Text>
              <Navbar.Text className="margin-right-nav">
                <NavLink>
                      Login
                </NavLink>
              </Navbar.Text>
                <Navbar.Text className="margin-right-nav">
                  <NavLink>
                      Sign up
                  </NavLink>
            </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav
