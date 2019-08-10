import React, {useState} from 'react'
import {connect} from 'react-redux'
import AddToolkit from './AddToolkit'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux' //takes several things and combines
import Loader from './Loader'
import {Row, Col} from 'react-bootstrap'
import ToolkitItem from './ToolkitItem'



const Toolkit = ({toolkit, userId, requesting, requested}) => {
  console.log('toolkit', toolkit)
  console.log('requesting', requesting)
  console.log('requested', requested)


  let content

    if(!toolkit){
      content =
        <div>
          <Loader/>
        </div>
      // console.log('loading')
    }


    else if(!toolkit[userId] && requested[`toolkit/${userId}`]){
      content = <div>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <p className="white-text p-margin-top modal-heading">Your toolkit is empty but don't fret... you can fix that!</p>
            {/* <div className="white-toolkit-box">
            <p className="p-margin text-weight"> Maybe add something in one of the suggested categories:  </p>
            <p className="p-margin text-align-left">Art, Exercise, Music, Gaming, Travel, Animal Related, Social, Volunteering, Other...</p>
            </div> */}
        </Col>
        <Col sm={4}></Col>
        </Row>
      </div>
      // console.log('You have no items in your toolkit')
    }
    else if (!toolkit[userId]){
      content = <Loader/>
    }

    else if (toolkit[userId].toolkit.length < 1){
      content = <div>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <p className="white-text p-margin-top modal-heading">Your toolkit is empty but don't fret... you can fix that!</p>
            {/* <div className="white-toolkit-box">
            <p className="p-margin text-weight"> Maybe add something in one of the suggested categories:  </p>
            <p className="p-margin text-align-left">Art, Exercise, Music, Gaming, Travel, Animal Related, Social, Volunteering, Other...</p>
            </div> */}
        </Col>
        <Col sm={4}></Col>
        </Row>
      </div>
    }

    else {
      // content = `You have ${toolkit[userId].toolkit.length === 1? `${toolkit[userId].toolkit.length} item`  :  `${toolkit[userId].toolkit.length} items` }`
      // console.log('You have items in your toolkit!')
      content = <div> {toolkit[userId].toolkit.map((toolkitItem, index) =>
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

//use connect firestore to recieve props to find the userId
