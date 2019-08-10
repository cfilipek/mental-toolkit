import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import DeleteToolkit from './DeleteToolkit'
import ViewToolkit from './ViewToolkit'
import EditToolkit from './EditToolkit';

const ToolkitItem = (toolkit) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isViewing, setisViewing] = useState(false);
  const [isUpdating, setisUpdating] = useState(false);
  console.log(isDeleting);
  return (
    <div>
      <Row className="text-center">
        <Col sm={4}></Col>
        <Col sm={4}>
          <div className="center-toolkit">
            <Row className="toolkit-display">
              <Col sm={4} className="margin-bottom-activity">{toolkit.toolkit.activity}
                  <div onClick={()=> setisUpdating(true)} className="edit-delete">Edit</div>
                  <EditToolkit toolkit ={toolkit} show={isUpdating} close ={()=> setisUpdating(false)}/>
              </Col>
       {/* <Col sm={4}>{toolkitItem.description}</Col> */}
              <Col sm={4}
              className="margin-bottom-activity">{toolkit.toolkit.category}
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
