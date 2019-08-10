
//using redux thunk
//already applied thunk middleware
//docs https://firebase.google.com/docs/auth/web/password-auth
export const signUp = data => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  dispatch({type: 'AUTH_START'})

  try{
    const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    //res.user.uid === userId
    console.log(res.user.uid)

    //Add data https://firebase.google.com/docs/firestore/manage-data/add-data
    await firestore
    .collection('users')
    .doc(res.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
      // email: data.email,
      // password: data.password
      //Adds to firebase database!!!
    })

  }catch(err){
    dispatch({type: 'AUTH_FAIL', payload: err.message}) //payload to capture error message
  }
  //even if it gives an error dispatch an action if not successful
  dispatch({type: 'AUTH_END'})
}

//logout action creator
//https://firebase.google.com/docs/auth/web/password-auth -- signout section
export const signOut = () => async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase()
  try{
    await firebase.auth().signOut()

  }catch(err){
    console.log(err.message)
  }
}

//login action creator
//https://firebase.google.com/docs/auth/web/password-auth -- login section
export const signIn = (data) => async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase()
  dispatch({type: 'AUTH_START'})
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    dispatch({type: 'AUTH_SUCCESS'})
  } catch(err){
    dispatch({type: 'AUTH_FAIL', payload: err.message}) //payload to capture error message
  }
  dispatch({type: 'AUTH_END'})
}
