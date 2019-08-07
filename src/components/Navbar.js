import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Modal, Button} from 'react-bootstrap'


//fixed navbar
//hover border-bottom 2px solid white


const Nav = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Navbar.Text className="margin-right-nav-emergency" onClick={handleShow} >
            <NavLink>
              Emergency Resources
            </NavLink>
          </Navbar.Text>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
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
