//http://gavinschulz.com/posts/2017-03-22-4-techniques-for-loading-states-in-redux.html
const initialState = {
  loading: false,
  deleteToolkit: {
    loading: false
  }
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_TOOLKIT_START':
      return {...state, loading:true}
    case 'ADD_TOOLKIT_SUCCESS':
      return {...state, loading:false, error: false}
    case 'ADD_TOOLKIT_FAIL':
      return {...state,loading:false, error: action.payload}

    case 'DELETE_TOOLKIT_START':
      return {...state, deleteToolkit: {...state.deleteToolkit, loading: true}}
    case 'DELETE_TOOLKIT_SUCCESS':
      return {...state, deleteToolkit: {...state.deleteToolkit, loading: false, error:false}}
    case 'DELETE_TOOLKIT_FAIL':
      return {...state, deleteToolkit: {...state.deleteToolkit, loading: false, error: action.payload}}

    default:
      return state
  }
}
