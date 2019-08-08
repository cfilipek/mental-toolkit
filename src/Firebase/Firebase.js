import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "mental-toolkit.firebaseapp.com",
  databaseURL: "https://mental-toolkit.firebaseio.com",
  projectId: "mental-toolkit",
  storageBucket: "mental-toolkit.appspot.com",
  messagingSenderId: "763428582939",
  appId: "1:763428582939:web:3ca5f6513abaa280"
 }

 firebase.initializeApp(config)
 firebase.firestore()

 export default firebase
