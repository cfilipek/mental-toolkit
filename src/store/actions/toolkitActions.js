
//Add a toolkit

export const addToolkit = data => async(dispatch, getState, {getFirestore}) => {
  const firestore = getFirestore()
  dispatch({type: "ADD_TODO_START"})
  const userId = getState().firebase.auth.uid

  try {
     await firestore.collection('toolkit').doc(userId)
     .update({
      toolkit: firestore.FieldValue.arrayUnion(data.activity, data.description, data.category)
    })
    dispatch({type: "ADD_TODO_SUCCESS"})
  }catch(err){
    dispatch({type: "ADD_TOOLKIT_FAIL", payload: err.message})
  }
}
