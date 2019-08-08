import React, {useEffect} from 'react' //useEffect is a react hook
import {connect} from 'react-redux'
import * as actions from '../store/actions'

const Logout = ({logout}) => {
  useEffect(()=>{
    logout()
  }, [logout])
  return null
}

const mapDispatchToProps = {
  logout: actions.signOut
}

export default connect(null, mapDispatchToProps)(Logout)
