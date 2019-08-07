import React from 'react'
import {Form, Button, Modal, ButtonToolbar} from 'react-bootstrap'



const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add to your Toolkit!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Activity</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select a Category</Form.Label>
          <Form.Control as="select">
            <option>Art</option>
            <option>Music</option>
            <option>Gaming</option>
            <option>Exercise</option>
            <option>Travel</option>
            <option>Animal Related</option>
            <option>Social</option>
            <option>Volunteering</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-blue" onClick={props.onHide}>Add</Button>
        <Button className="button-blue" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Toolkit = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="title">Your Toolkit</div>
      <div className="center-text">
        <ButtonToolbar>
          <Button className="button-blue button-move-down" variant="primary" onClick={() => setModalShow(true)}>
            Add
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default Toolkit
