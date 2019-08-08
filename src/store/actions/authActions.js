
//function that returns another function
//using redux thunk
//already applied thunk middleware
//docs https://firebase.google.com/docs/auth/web/password-auth
export const signUp = data => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase()
  const firestore = getFirestore()

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
      email: data.email,
      password: data.password
    })

  }catch(err){

  }
}