import {combineReducers} from 'redux'
//https://react-redux-firebase.com/docs/firestore.html
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import authReducer from './authReducer'
import toolkitReducer from './toolkitReducer'

export default combineReducers({

  auth: authReducer,
  toolkit: toolkitReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})
