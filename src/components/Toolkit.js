import React, {useState} from 'react'
import {connect} from 'react-redux'
import AddToolkit from './AddToolkit'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux' //takes several things and combines
import Loader from './Loader'
import {Row, Col} from 'react-bootstrap'
import DeleteToolkit from './DeleteToolkit';
import ToolkitItem from './ToolkitItem'



const Toolkit = ({toolkit, userId, requesting, requested}) => {
  console.log(toolkit)
  console.log(requesting)
  console.log(requested)


  let content

    if(!toolkit){
      content =
        <div>
          <Loader/>
        </div>
      // console.log('loading')
    }

    else if(!toolkit[userId] && requested[`toolkit/${userId}`]){
      content = <p>You have nothing in your toolkit</p>
      // console.log('You have no items in your toolkit')
    }

    else {
      // content = `You have ${toolkit[userId].toolkit.length === 1? `${toolkit[userId].toolkit.length} item`  :  `${toolkit[userId].toolkit.length} items` }`
      // console.log('You have items in your toolkit!')
      content = <div> {toolkit[userId].toolkit.map(toolkitItem =>
        <ToolkitItem key={toolkitItem.id} toolkit={toolkitItem} />
      )} </div>
    }

    return (
      <div className="toolkit-margin-bottom">
      <div className="title-white">Your Toolkit</div>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}><AddToolkit/></Col>
          <Col sm={4}></Col>
        </Row>
        <div  className="center-text behind">{content}</div>
      </div>
    )
  }




const mapStateToProps = ({firebase, firestore}) => ({
  //get user id to associate w/toolkit of user
  userId: firebase.auth.uid,
  toolkit: firestore.data.toolkit,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested
  })

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect(props => [`toolkit/${props.userId}`])
)(Toolkit)

//use connect first to recieve props to find the userId
