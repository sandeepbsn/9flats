import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
  } from "../actiontypes/registerActionTypes";
  import axios from "../../utils/axiosInstance";
  import {apiServices} from '../apiServices/apiServices';
  import {history} from '../history/routerHitory'
  
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
  

export const register = (user) => {
    return dispatch => {
        dispatch(registerUserRequest(user));
        apiServices.register(user)
            .then(
                user => { 
                    dispatch(registerUserSuccess(user));
                    history.push('/login');
                    console.log('Registration successfull');
                },
                error => {
                    dispatch(registerUserFailure(error.toString()));
                    console.log(error);
                }
            );
    };
}

 
