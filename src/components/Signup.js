
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

//Using Formik https://blog.bitsrc.io/creating-forms-in-react-with-formik-and-yup-698d09363a22
const Signup = ({signUp, loading, error}) => {
  // console.log(loading)
  // console.log(error)
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
        <div className="blue-bkgd">
          <div className="title title-margin-bottom center-text no-margin-left white">Sign up</div>
          <Row className="center">
            <Col sm={3}></Col>
            <Col sm={6}>
            <div>
              <Form  className="form">
              <h6 color="white" className="form-title center-text">
                      Sign up to create your own toolkit
                    </h6>
                <Row>
                  <Col className="center-text" sm={6}>
                  <Field className="field"
                      type="text"
                      name="firstName"
                      placeholder="first name"
                    />
                    <div className="error" >
                    <ErrorMessage name="firstName"/>
                    </div>
                    <Field className="field"
                      type="text"
                      name="lastName"
                      placeholder="last name"
                    />
                    <div className="error" >
                    <ErrorMessage name="lastName"/>
                    </div>
                    <Field className="field"
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                    <div className="error" >
                    <ErrorMessage name="email"/>
                    </div>
                  </Col>
                  <Col className="center-text" sm={6}>
                    <Field className="field"
                      type="password"
                      name="password"
                      placeholder="Your password"
                    />
                    <div className="error" >
                     <ErrorMessage name="password"/>
                     </div>
                     <Field className="field"
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-type your password"
                    />
                    <div className="error" >
                     <ErrorMessage name="password"/>
                     </div>
                  </Col>
                  </Row>
                  <Row className="center-text">
                  <Col sm={6}>
                        <Button className="button-blue margin-top-button" type="submit">
                        {loading= loading ? 'Signing up' : 'Sign Up' }
                        </Button>
                      </Col>
                    <Col sm={6}>
                      <Link to="/login"><Button className="button-pink margin-top-button">
                        Login
                        </Button></Link>
                      </Col>
                      </Row>
                      <p className="center-text padding-description">{error ? 'Email has already been used.' : 'Sign up to join the Mental Community!'}</p>
                      <p className="center-text padding-description">By signing up you are agreeing to our <Link to='/terms'>term of service</Link></p>
                  </Form>
                  </div>
                  </Col>
                  <Col sm={3}></Col>
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
