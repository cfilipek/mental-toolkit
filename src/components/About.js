import React from 'react'
import {Col, Row} from 'react-bootstrap'

const About = () => {
  return(
    <div className="max-width">
      <Row>
        <Col sm={4} className="title">
          <div>About <span className="blue-text"><br/>Me</span>ntal</div>
          <div className="backgound-image-about"></div>
        </Col>
        <Col sm={6} className="col-width">
          <h3>This website was created as a resource for everybody. Because everybody, despite how it may seem on social media, has their own mental health struggles.
          <br/><br/>
          There is no “one-fits-all” solution, nor is there an “easy-fix”.
          This requires deep individual work. In fact, you may not find this website helpful at all. And that is totally okay.</h3>
        </Col>
      </Row>
      <div className="center-text">
        <div className="title-no-margin">How can we do better?</div>
        <a href="mailto:claireflpk@gmail.com?Subject=Hello%20again" target="_top"><h3 className="margin-top-h3">Please email us to let us know!</h3></a>
        <img className="envelope" src="https://i.imgur.com/yqkNV5Z.png" alt="letter" />
      </div>
    </div>
  )
}

export default About
