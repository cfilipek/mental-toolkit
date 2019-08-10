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

  const [isDeleting, setisDeleting] = useState(false)
  console.log(isDeleting)


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

        // <Row key={toolkitItem.id} className="text-center">
        //   <Col sm={4}></Col>
        //   <Col sm={4}>
        //   <div>
        //     <Row className="toolkit-display">
        //       <Col sm={4}>{toolkitItem.activity}
        //         <div className="edit-delete">Edit</div>
        //       </Col>
        //       {/* <Col sm={4}>{toolkitItem.description}</Col> */}
        //       <Col sm={4}>{toolkitItem.category}
        //       <div onClick={()=> setisDeleting(true)} className="edit-delete">Delete</div>
        //       <DeleteToolkit toolkitItem ={toolkitItem} show={isDeleting} close ={()=> setisDeleting(false)}/>
        //       </Col>
        //       <Col sm={4}>
        //         {/* <div>View</div> */}
        //         <img className="eye" src="https://i.imgur.com/h53cQaW.png" alt="eye"/>
        //       </Col>
        //     </Row>
        //   </div>
        // </Col>
        // <Col sm={4}></Col>
        // </Row>

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
