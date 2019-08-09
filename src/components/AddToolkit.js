import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import {Button} from 'react-bootstrap'
import * as Yup from 'yup';

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

//add toolkit modal using Formik
//using Formik: https://blog.bitsrc.io/creating-forms-in-react-with-formik-and-yup-698d09363a22
const AddToolkit = () => {
  const [isOpened, setisOpened] = useState(false)
  return (
    <div className="text-center">
      <Button className="button-blue move-down-button" onClick={()=> setisOpened(true)}>
      Add toolkit item
      </Button>
    </div>
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
