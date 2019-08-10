import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import DeleteToolkit from './DeleteToolkit'
import ViewToolkit from './ViewToolkit'

const ToolkitItem = (toolkit) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isViewing, setisViewing] = useState(false);
  console.log(isDeleting);
  return (
    <div>
      <Row className="text-center">
        <Col sm={4}></Col>
        <Col sm={4}>
          <div>
            <Row className="toolkit-display">
              <Col sm={4}>{toolkit.toolkit.activity}
                  <div className="edit-delete">Edit</div>
              </Col>
       {/* <Col sm={4}>{toolkitItem.description}</Col> */}
              <Col sm={4}>{toolkit.toolkit.category}
              <div onClick={()=> setisDeleting(true)} className="edit-delete">Delete</div>
               <DeleteToolkit toolkit ={toolkit} show={isDeleting} close ={()=> setisDeleting(false)}/>
               </Col>
                <Col sm={4}>
        {/* <div>View</div> */}
              <img onClick={()=> setisViewing(true)} className="eye" src="https://i.imgur.com/h53cQaW.png" alt="eye"/>
              <ViewToolkit toolkit ={toolkit} show={isViewing} close ={()=> setisViewing(false)}/>
                </Col>
              </Row>
          </div>
            </Col>
            <Col sm={4}></Col>
         </Row>
    </div>
  )
}

export default ToolkitItem
