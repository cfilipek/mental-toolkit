
//Add a toolkit

export const addToolkit = data => async(dispatch, getState, {getFirestore, getFirebase}) => {
  const firestore = getFirestore()
  const userId = getState().firebase.auth.uid
  dispatch({type: "ADD_TODO_START"})
  try {
     const res = await firestore.collection('toolkits').doc(userId)
     .get()
     const newToolkit = {
       id: new Date().valueOf(),
       activity: data.activity,
       description: data.description,
       category: data.category
     }
     if (!res.data()) {
      firestore
        .collection('toolkits')
        .doc(userId)
        .set({
          toolkits: [newToolkit],
        });
    } else {
      firestore
        .collection('toolkits')
        .doc(userId)
        .update({
          toolkits: [...res.data().toolkits, newToolkit],
        })
    }

    dispatch({type: "ADD_TODO_SUCCESS"})
  }catch(err){
    dispatch({type: "ADD_TOOLKIT_FAIL", payload: err.message})
  }
}
