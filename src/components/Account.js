import React from 'react'
import {connect} from 'react-redux'
//Formik docs https://github.com/jar
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


const Account = ({signUp, loading, error, email, firstName}) => {

  console.log(email)

  return (
    <div className="toolkit-margin-bottom">
    <div className="title-white">Your Account</div>
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
              <Row className="center">
                <Col sm={3}></Col>
                <Col sm={6}>
                <div>
                  <Form  className="form">
                  <h6 color="white" className="form-title center-text">
                          Edit or Delete your account
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
                      </Form>
                      </div>
                      </Col>
                      <Col sm={3}></Col>
                    </Row>
                </div>
          )}
        </Formik>
      </div>
    )
  }


const mapStateToProps = ({auth, firebase}) => ({
  loading: auth.loading,
  error: auth.error,
  email: firebase.auth.email,
})

const mapDispatchToProps = {
  signUp : actions.signUp
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)

