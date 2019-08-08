import React from 'react';
//Formik docs https://github.com/jaredpalmer/formik
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as actions from '../store/actions'
import {connect} from 'react-redux'

//yup docs https://github.com/jquense/yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'Too short'),
});

const Login = ({login, loading, error}) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={ async(values, { setSubmitting }) => {
        console.log(values)
        await login(values)
        setSubmitting(false)
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
                      Welcome back to Mental!
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
                      <Button className="button-blue margin-top-button margin-left-button" type="submit">
                      {loading= loading ? 'Logging in' : 'Login' }
                      </Button>
                      <p className="center-text padding-description">{error ? 'This user does not exist.' : 'Welcome back!'}</p>
                  </Form>
                  </div>
                  </Col>
                </Row>
            </div>
      )}
    </Formik>
  );
};

const mapSateToProps = ({auth}) => ({
  loading: auth.loading,
  error: auth.error
})

const mapDispatchToProps = {
  login: actions.signIn
}

export default connect(mapSateToProps, mapDispatchToProps) (Login)
