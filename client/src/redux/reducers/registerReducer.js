import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from "../actiontypes/registerActionTypes";
  
  const initState = {
    isAuth: false,
    isLoading: true,
    error: false
  };
  
  const regReducer = (state = initState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          isLoading: true,
          error: false
        };
      case REGISTER_USER_SUCCESS:
        return {
          isLoading: false,
          isAuth: true
        };
      case REGISTER_USER_FAILURE:
        return {
          isLoading: false,
          error: true
        };
      default:
        return state;
    }
  };
  
  export default regReducer;