
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
    // console.log(res.user.uid)

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
 dispatch({type: 'AUTH_SUCCESS'})
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

//Edit profile

export const editProfile = data => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  const user = firebase.auth().currentUser
  console.log(user)
  const userEmail = getState().firebase.auth.email
  const userId = getState().firebase.auth.uid
  console.log(userEmail)
  console.log(userId)
  // const {uid: userId, email: userEmail} = getState().firebase.auth
  dispatch({type: 'PROFILE_EDIT_START'})
  try{
    if(data.email !== userEmail){
      await user.updateEmail(data.email)
    }

    await firestore.collection('users')
    .doc(userId)
    .set({
      firstName: data.firstName,
      lastName: data.lastName
    })

    if(data.password.length > 0){
      await user.updatePassword(data.password)
    }

    dispatch({type: 'PROFILE_EDIT_SUCCESS'})
  }catch(err){
    dispatch({type: "PROFILE_EDIT_FAIL", payload: err.message})
  }
}

//delete user
export const deleteUser = () => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()
  const firestore= getFirestore()
  dispatch({type: 'DELETE_START'})
  const user = firebase.auth().currentUser
  const userId = getState().firebase.auth.uid
  try{
    await user.delete()
    await firestore.collection('users')
    .doc(userId).delete()

  } catch(err){
    dispatch({type: 'DELETE_FAIL'})
  }
}
