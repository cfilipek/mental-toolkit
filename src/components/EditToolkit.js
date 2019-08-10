import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import {Button, Row, Col} from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage} from 'formik';
//https://www.styled-components.com/
import styled from 'styled-components'

//Yup to define fields of db model
const ToolkitSchema = Yup.object().shape({
  activity: Yup.string()
    .required('The activity is required.')
    .min(4, 'Too short.'),
  description: Yup.string()
    .required('The description is required.')
    .min(4, 'Too short.'),
  category: Yup.string()
    .required('The category is required.')
})

//styling modal
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
  opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  background-color: #4c5ad2;
  color: white;
  padding: 50px;
  border-radius: 25px;
  width: 60rem;
  border: 3px solid white`

const EditToolkit = ({show, close, toolkit, editToolkit, loading, error}) => {
  console.log('toolkit?', toolkit.toolkit.activity)
  return (
    <div className="text-center">
      <Modal opened={show} close={close}>
        <h3 className="modal-heading">
          Update {toolkit.toolkit.activity}?
        </h3>
        <h6>Edit your toolkit item and press update.</h6>
        <div>
        <Formik
          initialValues={{
            activity: toolkit.toolkit.activity,
            description: toolkit.toolkit.description,
            category: toolkit.toolkit.category,
          }}
          validationSchema= {ToolkitSchema}
          onSubmit={ async(values) => {
            //send our form
            console.log('made it here')
            console.log(toolkit.toolkit.id)
            console.log(values)
            await editToolkit(toolkit.toolkit.id, values)
            close()
          }}
        >
          <Form>
            <Row>
              <Col>
                <Field className="field-toolkit"
                      component="textarea"
                      rows="4"
                      name="activity"
                      placeholder="Enter your activity"
                />
                <ErrorMessage className="err-message" name="activity"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field className="field-toolkit"
                      component="textarea"
                      rows="4"
                      name="description"
                      placeholder="Enter your description"
                />
                <ErrorMessage className="err-message" name="description"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="category">
                  Categories:
                </label>
            </Col>
            </Row>
            <Field
            className='select'
              name="category"
              component="select">
                <option value="" label="Select a category" />
                <option value="Art" label="Art" />
                <option value="Exercise" label="Exercise" />
                <option value="Music" label="Music" />
                <option value="Gaming" label="Gaming" />
                <option value="Travel" label="Travel" />
                <option value="Animal Related" label="Animal Related" />
                <option value="Social" label="Social" />
                <option value="Volunteering" label="Volunteering" />
                <option value="Other" label="Other" />
              </Field>
              <ErrorMessage className="err-message" name="category"/>
              <Row>
                <Col sm={6}>
                  <Button type="submit" className="button-pink">{loading? 'Updating' : 'Update'}</Button>
                </Col>
                <Col sm={6}>
                  <Button className="button-blue" onClick={close}>Close</Button>
                </Col>
              </Row>
        </Form>
        </Formik>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = ({toolkit})  => ({
  loading: toolkit.loading,
  error: toolkit.error
})

const mapDispatchToProps = {
  editToolkit: actions.editToolkit
}

export default connect(mapStateToProps, mapDispatchToProps)(EditToolkit)


