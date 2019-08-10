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
  background-color: white;
  color: #4c5ad2;
  padding: 50px;
  border-radius: 25px;
  width: 60rem;
  border: 3px solid #4c5ad2`

  let icon;



const ViewToolkit = ({show, close, toolkit}) => {
  console.log('toolkit?', toolkit.toolkit.category)
  if((toolkit.toolkit.category) === "Art"){
    icon = 'https://i.imgur.com/MsmxeY0.png'
  }
  else if((toolkit.toolkit.category) === "Exercise"){
    icon = 'https://i.imgur.com/icOfaPx.png'
  }
  else if((toolkit.toolkit.category) === "Music"){
    icon = 'https://i.imgur.com/GaEhOQm.png'
  }
  else if((toolkit.toolkit.category) === "Gaming"){
    icon = 'https://i.imgur.com/DVDIR0b.png'
  }
  else if((toolkit.toolkit.category) === "Travel"){
    icon = 'https://i.imgur.com/7R8VeDu.png'
  }
  else if((toolkit.toolkit.category) === "Animal Related"){
    icon = 'https://i.imgur.com/rsFRs7I.png'
  }
  else if((toolkit.toolkit.category) === "Social"){
    icon = 'https://i.imgur.com/d7Js9Yf.png'
  }
  else if((toolkit.toolkit.category) === "Volunteering"){
    icon = 'https://i.imgur.com/7TJrkxc.png'
  }
  else if((toolkit.toolkit.category) === "Other"){
    icon = 'https://i.imgur.com/RJ2vd4A.png'
  }


  return (
    <div>
      <Modal opened={show} close={close}>
      <img className="category-icon" src={icon} alt="icon"/>
        <h3 className="text-center modal-heading activity-heading">
           {toolkit.toolkit.activity}
        </h3>
        <h5 className="text-left">{toolkit.toolkit.description}</h5>
        <h5 className="text-center">
           Category: {toolkit.toolkit.category}
        </h5>
      </Modal>
    </div>
  )
}

export default ViewToolkit
