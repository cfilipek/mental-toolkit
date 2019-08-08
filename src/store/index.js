import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import firebase from '../Firebase/Firebase'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'


import rootReducer from './reducers'

//react-redux-firebase config
const rrfConfig ={
  userProfile: 'users',
  useFirestoreForProfile: true
}

//redux devtools
const composeEnhancers =
// process.env.NODE_ENV === 'developement' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}), createLogger({collapsed: true})))
)

export default store


