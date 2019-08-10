import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import {Button, Row, Col} from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage} from 'formik';
//https://www.styled-components.com/
import styled from 'styled-components'

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

const EditToolkit = ({show, close, toolkit}) => {
  console.log('toolkit?', toolkit.toolkit.activity)
  return (
    <div className="text-center">
      <Modal opened={show} close={close}>
        <h3 className="modal-heading">
          Update {toolkit.toolkit.activity}?
        </h3>
        <h6>Type your activity and press add.</h6>
        <div>
        <Formik>
          <Form>
          </Form>
        </Formik>
        </div>
        <Button className="button-blue" onClick={close}>Close</Button>
      </Modal>
    </div>
  )
}

export default EditToolkit
