import {
    PROFILE_USER_REQUEST,
    PROFILE_USER_SUCCESS,
    PROFILE_USER_FAILURE
  } from "./actionTypes";
  import axios from "../../utils/axiosInstance";

  export const profileUserRequest = () => ({
    type: PROFILE_USER_REQUEST
  });
  
  export const profileUserSuccess = payload => ({
    type: PROFILE_USER_SUCCESS,
    payload
  });
  
  export const profileUserFailure = payload => ({
    type: PROFILE_USER_FAILURE,
    error: payload
  });

  export const profileUser = payload => {
    return dispatch => {
      dispatch(profileUserRequest());
      return axios
        .post("/register", {
            firstname: payload.firstname,
            lastname: payload.lastname,
            email: payload.email,
            password: payload.password
        })
        .then(res => {
          dispatch(profileUserSuccess(res.data));
        })
        .catch(() => dispatch(profileUserFailure()));
    };
  };