import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from './authReducer'
import toolkitReducer from './toolkitReducer'

export default combineReducers({

  auth: authReducer,
  toolkit: toolkitReducer,
  firebase: firebaseReducer
})
