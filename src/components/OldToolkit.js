import React from 'react'
import {Form, Button, Modal, ButtonToolbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from '../store/actions'

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

const MyVerticallyCenteredModal = (props, {addToolkit}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      validationSchema={ToolkitSchema}
      onSubmit={async (values, {setSubmitting}) => {
        // send out toolkit here
        await addToolkit(values)
        setSubmitting(false)
      }}
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
          <Form.Control name="activity" as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select a Category</Form.Label>
          <Form.Control name="category" as="select">
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
        <Button type="submit" className="button-blue">Add</Button>
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

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  addToolkit : actions.addToolkit
}

export default connect(null, mapDispatchToProps) (Toolkit)
