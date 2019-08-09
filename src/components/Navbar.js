import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Modal, Button} from 'react-bootstrap'


//fixed navbar
//hover border-bottom 2px solid white


const Nav = ({loggedIn}) => {

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

              Emergency Resources

          </Navbar.Text>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Emergency Resources</Modal.Title>
            </Modal.Header>
            <Modal.Body><a rel="noopener noreferrer" href="https://suicidepreventionlifeline.org/" target="_blank">National Suicide Prevention Lifeline</a>: Call 1-800-273-8255</Modal.Body>
            <Modal.Body className="grey-text">Available 24 hours everyday</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <div>
         {!loggedIn.uid?
         <div>
          <Navbar.Text className="margin-right-nav">
              <NavLink to="/whyjoin">
                Why join?
              </NavLink>
            </Navbar.Text>
            <Navbar.Text className="margin-right-nav">
              <NavLink to="/about">
                About
              </NavLink>
              </Navbar.Text>
                <Navbar.Text className="margin-right-nav">
                  <NavLink to="/login">
                        Login
                  </NavLink>
                </Navbar.Text>
                  <Navbar.Text className="margin-right-nav">
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
              </Navbar.Text>
            </div>:
            <div>
              <Navbar.Text className="margin-right-nav">
              <NavLink to="/toolkit">
                my toolkit
              </NavLink>
            </Navbar.Text>
              <Navbar.Text className="margin-right-nav">
              <NavLink to="/whyjoin">
                what is a toolkit?
              </NavLink>
            </Navbar.Text>
            <Navbar.Text className="margin-right-nav">
              <NavLink to="/about">
                About
              </NavLink>
              </Navbar.Text>
                <Navbar.Text className="margin-right-nav">
                  <NavLink to="/logout">
                        Logout
                  </NavLink>
                </Navbar.Text>
            </div>
          }
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav
