import {
    QUERY_REQUEST,
    QUERY_SUCCESS,
    QUERY_FAILURE
  } from "../actiontypes/queryActionTypes";

  const initState = {
    data:[],
    isLoading: true,
    error: false
  };

  const queryReducer = (state = initState, action) => {
    
    switch (action.type) {
      case QUERY_REQUEST:
        return {
          isLoading: true,
          error: false
        };
      case QUERY_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case QUERY_FAILURE:
        return {
          isLoading: false,
          error: true
        };
      default:
        return state;
    }
    
  };
  
  export default queryReducer;