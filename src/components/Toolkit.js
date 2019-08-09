import React from 'react'
import {connect} from 'react-redux'
import AddToolkit from './AddToolkit'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux' //takes several things and combines



const Toolkit = ({userId}) => {
  return (
    <div>
      <div>
        <AddToolkit/>
      </div>
    </div>
  )
}

const mapStateToProps = ({firebase}) => ({
  //get user id to associate w/toolkit of user
  userId: firebase.auth.uid
  })

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect(props => [`toolkit/${props.userId}`])
)(Toolkit)

//use connect first to recieve props to find the userId
