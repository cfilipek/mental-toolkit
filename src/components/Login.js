import React from 'react';
//Formik docs https://github.com/jaredpalmer/formik
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as actions from '../store/actions'
import {connect} from 'react-redux'

//yup docs https://github.com/jquense/yup
//Yup requirements: https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'Too short'),
});

//https://medium.com/medialesson/build-react-forms-and-validation-like-a-boss-with-formik-3d1f0c0fe52e
//using Formik https://blog.bitsrc.io/creating-forms-in-react-with-formik-and-yup-698d09363a22
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
        <div>
          <div className="title title-margin-bottom center-text no-margin-left">Login</div>
          <Row className="center">
            <Col sm={4}></Col>
            <Col sm={4}>
            <div>
              <Form  className="form">
                <Row>
                    <h6 color="white" className="form-title">
                      Welcome back to Mental!
                    </h6>
                  <Col className="center-text" sm={12}>
                    <Field className="field"
                      type="email"
                      name="email"
                      placeholder="Your email..."
                    />
                    <div className="error" >
                    <ErrorMessage className="err-message" name="email"/>
                    </div>
                  </Col>
                  <Col className="center-text"  sm={12}>
                    <Field className="field"
                      type="password"
                      name="password"
                      placeholder="Your password..."
                    />
                    <div className="error" >
                     <ErrorMessage className="err-message" name="password"/>
                     </div>
                  </Col>
                  </Row>
                  <Row>
                    <Col className="center-text"  sm={6}>
                     <Link to="/signup"><Button className="button-pink margin-top-button">
                      Sign up
                      </Button></Link>
                    </Col>
                    <Col className="center-text"  sm={6}>
                      <Button className="button-blue margin-top-button margin-left-button" type="submit">
                      {loading= loading ? 'Logging in' : 'Login' }
                      </Button>
                      </Col>
                      </Row>
                      <p className="center-text padding-description">{error ? 'This user does not exist.' : 'Welcome back!'}</p>
                  </Form>
                  </div>
                  </Col>
                </Row>
            </div>
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
