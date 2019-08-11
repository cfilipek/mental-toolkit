
//http://gavinschulz.com/posts/2017-03-22-4-techniques-for-loading-states-in-redux.html
const initialState = {
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'AUTH_START':
      return {...state, loading:true}
    case 'AUTH_END':
      return {...state, loading:false}
    case 'AUTH_FAIL':
      return {...state, error: action.payload}
    case 'AUTH_SUCCESS':
      return { ...state, error: false };
    case 'PROFILE_EDIT_START':
      return {...state, loading:true}
    case 'PROFILE_EDIT_SUCCESS':
      return {...state, loading:false, error:false}
    case 'PROFILE_EDIT_FAIL':
      return {...state, loading:false, error: action.payload}
    default:
      return state
  }
}
