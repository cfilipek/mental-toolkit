
//Add a toolkit

export const addToolkit = data => async(dispatch, getState, {getFirestore, getFirebase}) => {
  const firestore = getFirestore()
  const userId = getState().firebase.auth.uid
  dispatch({type: "ADD_TOOLKIT_START"})
  try {
     const res = await firestore.collection('toolkit').doc(userId)
     .get()
     const newToolkit = {
       id: new Date().valueOf(),
       activity: data.activity,
       description: data.description,
       category: data.category
     }
     console.log(res)
     if (!res.data()) {
      firestore
        .collection('toolkit')
        .doc(userId)
        .set({
          toolkit: [newToolkit],
        })
    } else {
      firestore
        .collection('toolkit')
        .doc(userId)
        .update({
          toolkit: [...res.data().toolkit, newToolkit],
        })
    }

    dispatch({type: "ADD_TOOLKIT_SUCCESS"})
    return true
  }catch(err){
    dispatch({type: "ADD_TOOLKIT_FAIL", payload: err.message})
  }
}
