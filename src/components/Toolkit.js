import React from 'react'
import {connect} from 'react-redux'
import AddToolkit from './AddToolkit'
// import { firestoreConnect } from 'react-redux-firebase'




const Toolkit = ({userId, activity, requesting, requested}) => {
  return (
    <div>
      <div>
        <AddToolkit/>
      </div>
    </div>
  )
}

// const mapStateToProps = ({ firebase, firestore }) => {
//   console.log('firestore', firestore)
//   return {
//   userId: firebase.auth.uid,
//   // toolkits: firestore.data,
//   // requesting: firestore.status.requesting,
//   // requested: firestore.status.requested,
//   }};

export default connect(null, null) (Toolkit)
