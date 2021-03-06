import React, {useState} from 'react'
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

//https://medium.com/@lucksp_22012/pure-react-modal-6e562a317b85
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

// const Background = styled.div`
//   backgound-color= grey;
//   opactiy: 0.5;
// `


//add toolkit modal using Formik
//using Formik: https://blog.bitsrc.io/creating-forms-in-react-with-formik-and-yup-698d09363a22
const AddToolkit = ({addToolkit, loading}) => {
  const [isOpened, setisOpened] = useState(false)
  // console.log(addToolkit)
  return (
    <div className="text-center">
      <Button className="button-blue" onClick={()=> setisOpened(true)}>
      Add toolkit item
      </Button>
      <Modal opened={isOpened} close={()=> setisOpened(false)}>
        <h3 className="modal-heading">
          Add your toolkit item
        </h3>
        <h6>Type your activity and press add.</h6>
        <div>
        <Formik
          initialValues={{
            activity: '',
            description: '',
            category: ''
          }}
          validationSchema= {ToolkitSchema}
          onSubmit={ async(values, { setSubmitting, resetForm }) => {
            //send our form
            const res = await addToolkit(values)
            // console.log('res', res)
                if (res) {
                setisOpened(false)
                }
                setSubmitting(false)
                resetForm()
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
              <div className="error" >
                <ErrorMessage className="err-message" name="activity"/>
               </div>
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
              <div className="error" >
                <ErrorMessage className="err-message" name="description"/>
              </div>
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
            <Button type="submit" className="button-blue">{loading= loading ? 'Adding' : 'Add' }</Button>
          </Col>
          <Col sm={6}>
          <Button className="button-blue" onClick={()=> {setisOpened(false)}}>Close</Button>
          </Col>
        </Row>
        </Form>
        </Formik>
        </div>

      </Modal>
    </div>
  )
}

const mapStateToProps = ({toolkit}) => ({
  loading: toolkit.loading,
})

const mapDispatchToProps = {
  addToolkit: actions.addToolkit
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToolkit)
