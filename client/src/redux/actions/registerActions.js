import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
  } from "./actionTypes";
  import axios from "../../utils/axiosInstance";
  
  export const registerUserRequest = () => ({
    type: REGISTER_USER_REQUEST
  });
  
  export const registerUserSuccess = payload => ({
    type: REGISTER_USER_SUCCESS,
    payload
  });
  
  export const registerUserFailure = payload => ({
    type: REGISTER_USER_FAILURE,
    error: payload
  });
  
  export const registerUser = payload => {
    return dispatch => {
      dispatch(registerUserRequest());
      return axios
        .post("/register", {
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            password: payload.password
        })
        .then(res => {
          dispatch(registerUserSuccess(res.data));
        })
        .catch(() => dispatch(registerUserFailure()));
    };
  };
  
 
