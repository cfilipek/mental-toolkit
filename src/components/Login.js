import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const Login = () => {
  return (
    <div>
      <div className="title">Login</div>
      <div className="center">
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="button-blue" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Login
