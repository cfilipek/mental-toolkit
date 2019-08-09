
const initialState = {
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_TOOLKIT_START':
      return {...state, loading:true}
    case 'ADD_TOOLKIT_SUCCESS':
      return {...state, loading:false, error: false}
    case 'ADD_TOOLKIT_FAIL':
      return {...state,loading:false, error: action.payload}

    default:
      return state
  }
}
