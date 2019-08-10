
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

//Delete toolkit item
export const deleteToolkit = id => async (dispatch, getState, {getFirestore}) => {
  const firestore = getFirestore()
  const userId = getState().firebase.auth.uid
  dispatch({type: 'DELETE_TOOLKIT_START'})
  try {
    const res = await firestore.collection('toolkit').doc(userId)
     .get()
    const previousToolkit = res.data().toolkit
    // console.log(previousToolkit)
    // console.log('id', id)
    const newToolkit = previousToolkit.filter(toolkit => toolkit.id !== id)
    // console.log('new toolkit', newToolkit)
    await firestore.collection('toolkit')
    .doc(userId)
    .update({
      toolkit: newToolkit
    })

    dispatch({type: 'DELETE_TOOLKIT_SUCCESS'})
  } catch(err) {
    dispatch({type: 'DELETE_TOOLKIT_FAIL'})
  }
}
