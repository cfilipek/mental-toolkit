
import React from 'react';
import {connect} from 'react-redux'
//Formik docs https://github.com/jaredpalmer/formik
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as actions from '../store/actions'

//yup docs https://github.com/jquense/yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
  .required('Your first name is required')
  .min(3, 'Too short.')
  .max(25, 'Too long.'),
  lastName: Yup.string()
  .required('Your first name is required')
  .min(3, 'Too short.')
  .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.')
  .min(8, 'The password is too short.'),
  confirmPassword: Yup.string().required('You need to confirm your password.')
  .oneOf([Yup.ref('password'), null], `Password doesn't match.`)
});

const Signup = ({signUp, loading, error}) => {
  console.log(loading)
  console.log(error)
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        signUp(values)
        setSubmitting(false)
      }}
    >
      {() => (
        <div>
          <div className="title title-margin-bottom">Sign up</div>
          <Row className="center">
            <Col sm={4}></Col>
            <Col sm={4}>
            <div>
              <Form  className="form">
                <Row>
                    <h6 color="white" className="form-title">
                      Sign up to create your own toolkit
                    </h6>
                  <Col sm={6}>
                  <Field className="field"
                      type="text"
                      name="firstName"
                      placeholder="first name"
                    />
                    <ErrorMessage name="name"/>
                    <Field className="field"
                      type="text"
                      name="lastName"
                      placeholder="last name"
                    />
                    <ErrorMessage name="name"/>
                    <Field className="field"
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                    <ErrorMessage name="email"/>
                  </Col>
                  <Col sm={6}>
                    <Field className="field"
                      type="password"
                      name="password"
                      placeholder="Your password"
                    />
                     <ErrorMessage name="password"/>
                     <Field className="field"
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-type your password"
                    />
                     <ErrorMessage name="password"/>
                  </Col>
                  </Row>
                     <Link to="/login"><Button className="button-blue margin-top-button">
                      Login
                      </Button></Link>
                      <Button className="button-blue margin-top-button margin-left-button" type="submit">
                      {loading= loading ? 'Signing up' : 'Sign Up' }
                      </Button>
                      <p className="center-text padding-description">{error ? 'Password has already been used.' : 'Sign up to join the Mental Community!'}</p>
                  </Form>
                  </div>
                  </Col>
                </Row>
            </div>
      )}
    </Formik>
  );
};

const mapStateToProps = ({auth}) => ({
  loading: auth.loading,
  error: auth.error,
})

const mapDispatchToProps = {
  signUp : actions.signUp
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
