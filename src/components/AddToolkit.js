import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import {Button} from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik, Field} from 'formik';
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
  background-color: #4c5ad2;
  color: white;
  padding: 20px;
  border-radius: 25px;`

//add toolkit modal using Formik
//using Formik: https://blog.bitsrc.io/creating-forms-in-react-with-formik-and-yup-698d09363a22
const AddToolkit = () => {
  const [isOpened, setisOpened] = useState(false)
  return (
    <>
    <div className="text-center">
      <Button className="button-blue move-down-button" onClick={()=> setisOpened(true)}>
      Add toolkit item
      </Button>
      <Modal opened={isOpened} close={()=> setisOpened(false)}>
        <h3 className="modal-heading">
          Add your toolkit item
        </h3>
        <Formik></Formik>

      </Modal>
    </div>
    </>
  )
}

// const mapStateToProps = ({toolkits}) => ({
//   loading: toolkits.loading,
//   error: toolkits.error
// })

const mapDispatchToPRops = {
  addToolkit: actions.addToolkit
}

export default connect(null, mapDispatchToPRops)(AddToolkit)
