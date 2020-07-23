import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from "../actiontypes/registerActionTypes";

  const initState = {
    isAuth: false,
    registering: true,
    error: false
  };
  
  const regReducer = (state = initState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          registering: true,
          error: false
        };
      case REGISTER_USER_SUCCESS:
        return {
          registering: false,
          isAuth: true
        };
      case REGISTER_USER_FAILURE:
        return {
          registering: false,
          error: true
        };
      default:
        return state;
    }
  };
  
  export default regReducer;