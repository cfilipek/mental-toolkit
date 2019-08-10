import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import {Button, Row, Col} from 'react-bootstrap'
//https://www.styled-components.com/
import styled from 'styled-components'

//styling modal
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
  opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  background-color: #4c5ad2;
  color: white;
  padding: 50px;
  border-radius: 25px;
  width: 60rem;
  border: 3px solid white`

const DeleteToolkit = ({show, close, toolkit, deleteToolkit}) => {
  // console.log('toolkit?', toolkit.toolkit.activity)
  return (
    <div className="text-center">
      <Modal opened={show} close={close}>
        <h3 className="modal-heading">
          Do you really want to delete {toolkit.toolkit.activity}?
        </h3>
        <h6 className="remove-sub-head">Remove this item from your toolkit.</h6>
        <div>
        </div>
        <Row>
          <Col sm={6}>
            <Button className="button-pink" onClick={() => deleteToolkit(toolkit.toolkit.id)}>Delete</Button>
          </Col>
          <Col sm={6}>
            <Button className="button-blue" onClick={close}>Close</Button>
          </Col>
        </Row>

      </Modal>
    </div>
  )
}

// const mapStateToProps = (state) => ({
// //loading and error
// })

const mapDispatchToProps = {
  deleteToolkit: actions.deleteToolkit
}

export default connect(null, mapDispatchToProps)(DeleteToolkit)
