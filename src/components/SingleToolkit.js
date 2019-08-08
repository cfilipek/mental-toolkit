import React from 'react'
import {Col, Row} from 'react-bootstrap'

const SingleToolkit = () => {
  return(
    <div>
      <Row>
        <Col sm={4}>
          <div className="title">Why <br/> Join?</div>
          <div className="backgound-image-join"></div>
        </Col>
        <Col sm={6} className="col-width">
          <h3>Join the Mental community and create a distress tolerance toolkit of your own!
          </h3>
          <div className="title-some-margin center-text color-purple">
          What is a toolkit?
        </div>
          <h3 className="h3-no-top-margin"><span className="weight-bold">Distress tolerance</span> skills refer to a type of intervention in Dialectical Behavioral Therapy (DBT) where clients learn to manage distress in a healthy way. These skills are helpful for situations where a client might not be able to control a situation, but they need to manage their own response.</h3>
          <h3 className="h3-no-top-margin"><span className="weight-bold">Creating a Distress tolerance toolkit</span> is a great way to remind yourself of activities that you enjoy. These activities can provide a distraction or perhaps lower your distress in some way.</h3>
        </Col>
      </Row>
      <div className="center-text">
        <div className="title-some-margin">Any questions?</div>
        <a href="mailto:claireflpk@gmail.com?Subject=Hello%20again" target="_top"><h3 className="margin-top-h3">Please email us to let us know!</h3></a>
        <img className="envelope" src="https://i.imgur.com/yqkNV5Z.png" alt="letter" />
      </div>
    </div>
  )
}

export default SingleToolkit
