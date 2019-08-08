import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div>
          <div className="title title-margin-bottom">Login</div>
          <Row className="center">
            <Col sm={4}></Col>
            <Col sm={4}>
            <div>
              <Form  className="form">
                <Row>
                    <h6 color="white" className="form-title">
                      Fill in your details to login into your account
                    </h6>
                  <Col sm={6}>
                    <Field className="field"
                      type="email"
                      name="email"
                      placeholder="Your email..."
                    />
                    <ErrorMessage name="email"/>
                  </Col>
                  <Col sm={6}>
                    <Field className="field"
                      type="password"
                      name="password"
                      placeholder="Your password..."
                    />
                     <ErrorMessage name="password"/>
                  </Col>
                  </Row>
                     <Link to="/signup"><Button className="button-blue margin-top-button">
                      Sign up
                      </Button></Link>
                      <Button className="button-blue margin-top-button margin-left-button" disabled={!isValid} type="submit">
                      Login
                      </Button>
                  </Form>
                  </div>
                  </Col>
                </Row>
            </div>
      )}
    </Formik>
  );
};

export default Login
