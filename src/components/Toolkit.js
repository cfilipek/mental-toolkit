import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import AddToolkit from './AddToolkit'

import * as Yup from 'yup';

const ToolkitSchema = Yup.object().shape({
  activity: Yup.string()
    .required('The activity is required.')
    .min(4, 'Too short.'),
  description: Yup.string()
    .required('The description is required.')
    .min(4, 'Too short.'),
  category: Yup.string()
    .required('The category is required.')
});


const Toolkit = () => {
  return (
    <div>
      <AddToolkit/>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps) (Toolkit)
