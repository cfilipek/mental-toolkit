import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import firebase from '../Firebase/Firebase'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'


import rootReducer from './reducers'

//react-redux-firebase config
//http://react-redux-firebase.com/docs/recipes/auth.html
const rrfConfig ={
  userProfile: 'users',
  useFirestoreForProfile: true, //Firestore for profile instead of realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
}

//redux devtools
const composeEnhancers =
process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose



const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}), createLogger({collapsed: true})))
)

export default store


