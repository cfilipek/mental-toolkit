import React from 'react'
import {Col, Row} from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer">
    <Row className="row justify-content-md-center">
      <Col sm={6}>
        <h5 className="footer-text">&copy; Mental LLC</h5>
      </Col>
      <Col sm={6}>
      <h5 className="footer-text">Created by Claire Filipek &hearts;</h5>
      </Col>
    </Row>
  </div>
  )
}

export default Footer
