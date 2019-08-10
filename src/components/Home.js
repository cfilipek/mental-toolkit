import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {
  return(
    <div className="max-width">
      <Row>
        <Col sm={4} className="title background-image-title">
          My mental health is important
        </Col>
        <Col sm={1}></Col>
        <Col sm={6} className="col-width">
          <h3>Find resources, create a distress tolerance toolkit, and most importantly feel free to directly reach out. You are not alone.
          <br/><br/></h3>
          <Link to="/about"><Button className="button-blue">Learn More</Button></Link>
        </Col>
      </Row>
      <Row className="row-margin-bottom">
        <Col sm={6} className="col-margins">
          <h3>This is not a website of upbeat superficial sayings. Life is hard. But you can hack it. And we are here it help. We provide a scaffolding for you to continue to find what works best for you. There is not a “one-fits-all” solution to mental health. You know you best!
          </h3>
        </Col>
        <Col sm={1}></Col>
        <Col sm={4} className="background-image-right"></Col>
      </Row>
    </div>
  )
}

export default Home
